import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductById } from "../../helpers/pedirDatos"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then (response => {
                setProduct(response)
        })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}