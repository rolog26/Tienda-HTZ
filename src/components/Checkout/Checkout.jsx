import './Checkout.css'
import { useContext, useRef } from "react"
import { cartContext } from "../../context/cartContext"
import { createOrder } from "../../firebase/db"
import { serverTimestamp } from "firebase/firestore"

function Checkout () {
    const { cart, getTotal, resetCart, finishAlert } = useContext(cartContext)
    const formRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value

        const order = {
            buyer: { name, email, phone },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }
        
        const createdOrder = await createOrder(order)
        
        finishAlert(createdOrder)
        
        resetCart()
        
        formRef.current.reset()
    }

    return(
        <div id = 'checkout'>
            <div id = 'checkout-cart'>
            {cart.map(prod => 
            <div key={prod.item.id}>
                <p>{prod.item.name} x {prod.quantity} = ${prod.item.price * prod.quantity}</p>
            </div>
            )}
            <p id ='p-total'>Total: ${cart.reduce((acc, prod) => acc + prod.item.price * prod.quantity, 0)}</p>
            </div>
            <div id = 'div-form'>
                <form id = 'form' action="submit" ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="name" >Nombre: </label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email" >Email: </label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="phone" >Teléfono: </label>
                    <input type="text" name="phone" id="phone" required />
                    <button type="submit">Finalizar compra</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout