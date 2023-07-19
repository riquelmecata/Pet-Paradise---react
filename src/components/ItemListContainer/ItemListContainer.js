import { useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const categoria = useParams().categoria

    useEffect(() => {
        pedirDatos()
        .then(response => {
            if(categoria){
                setProducts(response.filter((prod) => prod.categoria === categoria))
            }else {
                setProducts(response)
            }     
        })
    }, [categoria])

    return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products = {products}/>
    </div>
    );
}