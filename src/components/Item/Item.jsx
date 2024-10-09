import './Item.css'
import { Link } from "react-router-dom"

function Item ({ product }) {
    return (
        <div>
            <img className='img-product' src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            
            <Link to={`/products/${product.id}`}>
                <button>Más información</button>
            </Link>
        </div>
    )
}

export default Item