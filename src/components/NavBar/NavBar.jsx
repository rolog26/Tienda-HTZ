import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return (
        <nav>
            <div>
                <img src="./src/assets/images/logo-HTZ-1.png" alt="Logo HTZ"/>
            </div>
            <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Fuentes">Cargadores</a></li>
                <li><a href="#Cables">Cables</a></li>
                <li><a href="#Gaming">Gaming</a></li>
                <li><a href="#Auriculares">Auriculares</a></li>
                <li><a href="#Soportes">Soportes</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar