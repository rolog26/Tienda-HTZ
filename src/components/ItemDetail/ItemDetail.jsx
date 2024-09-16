import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ( {detail} ) {
    return (
        <div className="detail">
            <img className="detail-img" src={detail?.image} alt={detail?.name} />
            <div className="detail-info">
                <p className="detail-name">{detail?.name}</p>
                <p>{detail?.description}</p>
            </div>
            <div>
                <ItemCount />                
            </div>
        </div>
    )
}

export default ItemDetail
