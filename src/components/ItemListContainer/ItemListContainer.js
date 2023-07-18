import { useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        pedirDatos()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products = {products}/>
    </div>
    );
}