import cartImg from '../../assets/images/cart.svg'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext' 

function CartWidget() {

    const { getQuantity } = useContext(cartContext)

    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <button style={{backgroundColor: 'rgb(80, 80, 80)'}}>
                <img style={{height: '25px', width: '25px'}} src={cartImg} alt="cart-widget" />
                {getQuantity()}
            </button>
        </div>
    )
}

export default CartWidget