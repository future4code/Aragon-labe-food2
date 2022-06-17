import React, { useContext, useState } from "react";
import { GlobalContext } from "../global/GlobalContext";

export const ProductCard = (props) => {
    const {states, setters} = useContext(GlobalContext)
    const [open, setOpen] = useState(false)

    return(
        <>
         SOU UM CardProduct
        </>
    )
}