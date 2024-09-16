import './ItemCount.css'

function ItemCount () {
    return (
        <div>
            <button>Agregar al carrito</button>
            <div className="item-count">
            <button>-</button>
            <div>0</div>
            <button>+</button>
            </div>
        </div>
    )
}

export default ItemCount