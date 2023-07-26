import { useContext, useMemo, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Memo } from '../../ejemplos/renderprops/Memo'



export const ItemDetail = ({item}) =>{

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id))

    const [counter, setCounter] = useState(1)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            counter
        }

        agregarAlCarrito(newItem)
    }

    const fecha = useMemo(() => new Date(), [])
    // haciendo esto, la funcion date se ejecuta solo cuando se monta el componente y no cada cada vez que se actualiza

    return(
        <div className="container my-5">
            <h4>FyH: {fecha.toLocaleString()}</h4>
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.price}</p>
            <Memo/>
            <p>{counter % 2 === 0 ? 'Hola mundo' : 'Chau mundo'}</p>


            {
                isInCart (item.id)
                ? <button className='btn btn-primary'><Link className='btn btn-succes' to="/cart">Terminar mi compra</Link></button>
                :<ItemCount max={item.stock}
                counter={counter}
                setCounter={setCounter}
                agregar={handleAgregar}
                />
            }
            
        </div>
    )
}