import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../global/GlobalContext";

export const ProductCard = (props) => {
  const { states, setters } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const product = props.product;

  const { photo, id, name, description, price, quantify, restaurant } = product;
  const addCart = () => {
    setOpen(true);
  };

  if (quantify === "ordered") {
    const index = states.cart.findIndex((item) => item.name === name);
    if (index !== -1) {
      quantify = states.cart[index].quantify;
    }
  }

  const removeFromCart = () => {
    const position = states.cart.findIndex((item) => {
      return item.id === id;
    });

    let newCart = [...states.cart];

    if (newCart[position].quantify === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].quantify -= 1;
    }

    setters.setCart(newCart);
  };

  return (
    <>
      <img src={photo} alt={name} />
      <section>
        <p>{name}</p>
        <p>{description}</p>
        <p>R${price}</p>
      </section>
      <section>
        {quantify > 0 ? (
          <>
            <p>{quantify}</p>
            <Button color={"red"} onClick={removeFromCart}>
              remover
            </Button>
          </>
        ) : (
          <>
            <Button color={"green"} onClick={addCart}>
              adicionar
            </Button>
          </>
        )}
        {open === true && (
          <p open={props.open} setOpen={setOpen} product={product} />
        )}
      </section>
    </>
  );

  {
    /* <section>
      {quantify > 0 ?
                <>
                    <p>{quantify}</p>
                    <Button color={"red"} onClick={removeFromCart}>remover</Button>
                </>
                :
                <>
                    <Button color={"green"} onClick={addCart}>adicionar</Button>
                </>
            }
            {open === true && <> <p open={props.open} onClose={handleClose} maxWidth="lg">
                <p>Selecione a quantidade desejeda</p>
                <div>
                    <label>
                        <select onChange={onChange}>
                            <option value={1}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                    </label>
                </div>
                <DialogActions>
                    <Button onClick={addItem} color="primary">
                        ADICIONAR AO CARRINHO
                    </Button>
                </DialogActions>
            </p></>}
      </section> */
  }
  //     </>
  //   );
};
