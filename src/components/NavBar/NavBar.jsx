import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <div>
                <NavLink to="/"><img src="./src/assets/images/logo-HTZ-1.png" alt="Logo HTZ"/></NavLink>
            </div>
            <ul>
                <NavLink to="/" className={({ isActive}) => (isActive ? 'active-link' : '')}>Inicio</NavLink>
                <NavLink to="/category/fuentes" className={({ isActive}) => (isActive ? 'active-link' : '')}>Fuentes</NavLink>
                <NavLink to="/category/cables" className={({ isActive}) => (isActive ? 'active-link' : '')}>Cables</NavLink>
                <NavLink to="/category/auriculares" className={({ isActive}) => (isActive ? 'active-link' : '')}>Auriculares</NavLink>
                <NavLink to="/category/soportes" className={({ isActive}) => (isActive ? 'active-link' : '')}>Soportes</NavLink>
            </ul>
            <NavLink to='/cart'><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar