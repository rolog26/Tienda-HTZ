import { useState } from 'react'
import { cartContext } from './cartContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const duplicated = (item) => cart.some(prod => prod.item.id === item.item.id)

    const addToCart = (item) => {
        if (duplicated(item)) {
            const index = cart.findIndex(prod => prod.item.id === item.item.id)
            cart[index].quantity += item.quantity
            setCart([...cart])
            } else {
                setCart([...cart, item])
            }
    }

    const getTotal = () => {
        const pricesOnly = cart.map(prod => prod.item.price*prod.quantity)
        const total = pricesOnly.reduce((acc, current) => acc + current, 0)

        return total
    }

    const getQuantity = () => cart.reduce((acc, prod) => acc + prod.quantity, 0)

    const resetCart = () => setCart([])

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.item.id !== id))
    }

    const finishAlert = (order) => {
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: "¡Gracias por tu compra!",
            text: `El ID de tu compra es: ${order.id}`,
            icon: 'success',
        })
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, getTotal, getQuantity, resetCart, removeFromCart, finishAlert }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider