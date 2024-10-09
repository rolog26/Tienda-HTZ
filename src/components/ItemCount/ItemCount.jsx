import './ItemCount.css'
import { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

function ItemCount ( item ) {
    const [count, setCount] = useState(1)
    const { addToCart } = useContext(cartContext)

    const increment = () => setCount(count + 1)
    const decrement = () => {
        if (count > 1) setCount(count - 1)
        }
    const handleAddToCart = () => addToCart({...item, quantity: count})

    return (
        <div>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            <div className="item-count">
            <button onClick={decrement}>-</button>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default ItemCount