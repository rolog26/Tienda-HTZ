import cart from '../../assets/images/cart.svg'

function CartWidget() {
    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <img style={{height: '25px', width: '25px'}} src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget