import { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'




export const ItemDetail = ({item}) =>{

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id))

    const [counter, setCounter] = useState(10)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            counter
        }

        agregarAlCarrito(newItem)
    }


    return(
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.price}</p>
            <button className="btn-detail">Agregar al carrito</button>


            {
                isInCart (item.id)
                ? <Link className='btn btn-succes' to="/">Terminar mi compra</Link>
                :<ItemCount max={item.stock}
                counter={counter}
                setCounter={setCounter}
                agregar={handleAgregar}
                />
            }
            
        </div>
    )
}