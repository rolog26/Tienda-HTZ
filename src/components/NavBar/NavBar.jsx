import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <div>
                <Link to="/"><img src="./src/assets/images/logo-HTZ-1.png" alt="Logo HTZ"/></Link>
            </div>
            <ul>
                <Link to="/inicio">Inicio</Link>
                <Link to="/category/fuentes">Fuentes</Link>
                <Link to="/category/cables">Cables</Link>
                <Link to="/category/auriculares">Auriculares</Link>
                <Link to="/category/soportes">Soportes</Link>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar