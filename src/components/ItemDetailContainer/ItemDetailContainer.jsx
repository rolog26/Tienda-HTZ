import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getProduct } from '../../firebase/db'
import Loading from '../Loading/Loading'

function ItemDetailContainer () {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            getProduct(setDetail, id)
        }, 1500)
    }, [id])

    return (
        <div>
        {isLoading ? <Loading /> : <ItemDetail detail={detail} />}
        </div>
        
    )
}
 export default ItemDetailContainer