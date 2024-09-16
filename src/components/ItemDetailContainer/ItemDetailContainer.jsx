import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

function ItemDetailContainer () {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch ('/productos.json')
            .then(res => res.json())
            .then(res => {
                const product = res.find(item => item.id === Number(id))
                setDetail(product)
            })
        }, 1000)
    }, [id])

    return (
        <>
        <ItemDetail detail={detail} />
        </>
        
    )
}
 export default ItemDetailContainer