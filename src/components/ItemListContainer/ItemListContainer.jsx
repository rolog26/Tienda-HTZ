import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../firebase/db'
import Loading from '../Loading/Loading'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            categoryId ? getProducts(setItems, categoryId) : getProducts(setItems)
            setIsLoading(false)
        }, 1500)
        setIsLoading(true)
    }, [categoryId])

    
    return (
        <div className='item-list'>
            {isLoading ? <Loading /> : <ItemList items={items}/>}
            </div>
    )
}

export default ItemListContainer