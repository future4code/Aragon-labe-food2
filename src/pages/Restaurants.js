import { CircularProgress, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useEffect, useContext, useReducer } from "react";
import { RestaurantCard } from "../components/RestaurantCard";
import { GlobalContext } from "../global/GlobalContext";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Header } from '../components/Header'
import { Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useRequest } from "../hooks/useRequest";
import { BASE_URL } from "../constants/urls";
import { categories } from "../constants/categories";
import { goToRestaurantDetails } from "../routes/coordinator";
import { Search, SearchSharp } from "@mui/icons-material";


export const Restaurants = () => {
    useProtectedPage()
    
    const navigate = useNavigate();
    const {setters, states} = useContext(GlobalContext)
    const { restaurantsList, filterList } = states
    const {setRestaurantsList, setFilterList} = setters

    const filterByCategory = (category) => {
        const restaurants = restaurantsList.filter((restaurant) => {
          if (category === "Todos") {
            return restaurant.category 
          } else {
            return restaurant.category === category;
          }
        });
        setFilterList(restaurants);
      };
    
    const [data] = useRequest(`${BASE_URL}/restaurants`, [], navigate)

    useEffect(() => {
        if (data) {
          setRestaurantsList(data.restaurants);
        }
      }, [data]);

    const filterByName = (e) => {
        const filteredRestaurants = restaurantsList.filter((restaurant) => {
          if (e.target.value === "") {
            return restaurant.name === restaurant.name;
          } else {
            let nameLowerCase = restaurant.name.toLowerCase();
            return nameLowerCase.includes(e.target.value.toLowerCase());
          }
        });
        setFilterList(filteredRestaurants);
      };

    const mapCategories = categories.map((category, index) => {
        return (
            <a 
            key={index} 
            href={`#${category}`}
            onClick={()=> filterByCategory(category)}>{category}</a>
        )
    })

    const mapRestaurants = filterList.length > 0 ? (
        filterList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              />
          )
        })
      ) : (<p>Selecione uma categoria para começar!</p>)

    return(
        <>
        <Header
            title="FutureEats"
        />
        <section>
        <OutlinedInput
          type="text"
          onChange={filterByName}
          placeholder="Procurar"
          endAdornment={
              <InputAdornment>
              <SearchSharp/>
              </InputAdornment>
          }
        />
      </section>
      <section>
        {mapCategories}
      </section>
        <Typography>Lista de restaurantes</Typography>
        {mapRestaurants}
        <hr/>
        <Footer/>
        </>
    )
}