import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { GlobalState } from "../global/GlobalState";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { getRestaurantsDetails } from "../services/requests";


export const RestaurantDetails = (props) => {
  const [rest, setRest] = useState("");
  const params = useParams();
  useUnprotectedPage();

  const context = useContext(GlobalState)
  const {cart} = context.states

  useEffect(() => {
    getRestaurantsDetails(params.id).then((res) => {
      setRest(res);
    });
  }, [cart]);

  let organizedProducts = [];
  rest && rest.restaurant.products.map((item) => {
      if (organizedProducts.findIndex((category) => category.name === item.category) === -1) {
          organizedProducts = [...organizedProducts, {
              name: item.category,
              products: [item]
          }]
      }
      else {
          const categoryId = organizedProducts.findIndex((category) => item.category === category.name);
          organizedProducts[categoryId].products.push(item);
        }
    });

          const productList = () => {
            const completeList = [];
            for (let i = 0; i < organizedProducts.length; i++) {
                completeList.push(<div key={Math.random()} title={organizedProducts[i].name} >{props.title}</div> );
                organizedProducts[i].products.map((item) => {
                    completeList.push(<ProductCard 
                    key={Math.random()} 
                    photo={item.photoUrl} 
                    id={item.id} 
                    name={item.name} 
                    description={item.description} 
                    price={item.price.toFixed(2).replace(".", ",")} 
                    quantify={"request"} 
                    restaurant={rest.restaurant} />);
                });
            }
            return completeList}

  return (
    <>
      <p>{productList}</p>
    </>
  );
}
