import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ( {detail} ) {
    return (
        <div className="detail">
            <img className="detail-img" src={detail?.image} alt={detail?.name} />
            <div className="detail-info">
                <p className="detail-name">{detail?.name}</p>
                <h3>${detail?.price}</h3>
                <p>{detail?.description}</p>
            </div>
            <div>
                <ItemCount item={detail}/>                
            </div>
        </div>
    )
}

export default ItemDetail
