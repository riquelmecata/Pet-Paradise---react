export const ItemDetail = ({ id, titulo, imagen, categoria, stock, precio, descripcion }) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    {descripcion}
                </p>
            </section>
            <footer>
                <button className="Option">Agregar al carrito</button>
            </footer>
        </article>
    )
}