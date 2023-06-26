import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav>
            <h1>Pet paradise</h1>
            <div>
                <button>inicio</button>
                <button>nosotros</button>
                <button>contacto</button>
            </div>
            <CartWidget />
        </nav>
    );
}