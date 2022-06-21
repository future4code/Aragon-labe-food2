import React from "react";
import { useContext, useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { GlobalContext } from "../global/GlobalContext";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { getProfile, placeOrder } from "../services/requests";
import { ProductCard } from "../components/ProductCard";
import { Button, FormControl } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Header } from "../components/Header";

export const Cart = () => {
    const { states, setters } = useContext(GlobalContext)
    const {form, onChange, clean}= useForm({ paymentMethod: "" })
    const productsRequisitions = []
    const [addressUser, setAddressUser] = useState({})
    useProtectedPage()

    let sum = 0

    useEffect(() => {
        getProfile(setAddressUser)
    }, [])

    const CardProduct = states.cart.map((product) => {
        // SOMAR AS INFORMAÇÕES E MULTIPLICAR OS PRODUTOS PELAS QUANTIDADES
        sum += Number(product.price) * product.quantify
        const price = (Number(product.price) * product.quantify)

        //PUSHAR PARA O ARRAY PRODUCTS OBJETO COM ID E QUANTIFY
        productsRequisitions.push({
            id: product.id,
            quantity: product.quantify
        })

        return (
            <ProductCard key={product.id} product={product}/>
        )
    })

    const finalizeOrder = () => {
        const body = {
            products: productsRequisitions,
            paymentMethod: form.paymentMethod
        }
        placeOrder(body, states.cart[0].restaurant.id)
        setters.setCart([])
        clean()
    }


    return(
        <>
        <Header/>
        <section>
            <p>Endereço de entrega</p>
            <p>{addressUser && addressUser.address}</p>
        </section>
        <section>
            {states.cart.length === 0 ? <p>Carrinho vazio :(</p>
            : (
                <>
                    <p>{states.cart[0].restaurant.name}</p>
                    <p>{states.cart[0].restaurant.address}</p>
                    <p>{states.cart[0].restaurant.deliveryTime}-{states.cart[0].restaurant.deliveryTime + 10} min </p>
                <section>
                 {CardProduct}
                </section>
                </>
            )}
        <hr/>
        </section>
        <section>
            <div>
                Frete R$ {states.cart.length === 0? <>0,00</>
                    : (states.cart[0].restaurant.shipping)
                }
            </div>
            <div>
                <p>SUBTOTAL</p>
                <p>R${states.cart.length === 0? <>0,00</>
                    : (states.cart[0].restaurant.shipping)
                    }
                </p>
            </div>
        <hr/>
        </section>
        <section>
            <p>Forma de pagamento</p>
            <FormControl component="fieldset" color="black">
                                <RadioGroup aria-label="gender" name="paymentMethod" onChange={onChange}>
                                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                                </RadioGroup>
                            </FormControl>
        <hr/>
        </section>
        <div>
            <Button
                onClick={finalizeOrder}
                disabled={states.cart.length === 0 || form.paymentMethod === ""}
            >
                Finalizar Compra
            </Button>
        </div>

    
        </>
    )
}