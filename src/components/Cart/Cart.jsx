import './Cart.css'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from "react-router-dom"

function Cart () {
    const { cart, resetCart, removeFromCart } = useContext(cartContext)

    const handleEmptyCart = () => {
        resetCart()
    }

    const handleRemoveItem = (id) => {
        removeFromCart(id)
    }

    return (
        <div id = 'cart'>
            {cart.map(prod => 
            <div id = 'div-cart' key={prod.item.id}>
                <p id = 'p-cart'>{prod.item.name} x {prod.quantity} = ${prod.item.price * prod.quantity}</p>
                <img id = 'img-cart' src={prod.item.image} alt={prod.item.name} />
                <button id = 'btn-cart' onClick={() => handleRemoveItem(prod.item.id)}>Eliminar</button>
            </div>
            )}
            <button id = 'btn-delete' onClick={handleEmptyCart}>Vaciar carrito</button>
            <p id ='p-total'>Total: ${cart.reduce((acc, prod) => acc + prod.item.price * prod.quantity, 0)}</p>
            <Link id = 'confirm' to ='/checkout'>Confirmar compra</Link>
        </div>
    )
}

export default Cart