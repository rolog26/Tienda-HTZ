import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch("/productos.json")
            .then(res => res.json())
            .then(res => {
                if (!categoryId){
                        setItems(res)
                } else {
                        const productsByCategory = res.filter(item => item.category === categoryId)
                        setItems(productsByCategory)
                }
            })
        }, 1000)
    }, [categoryId])

    return (
        <div className='item-list'>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer