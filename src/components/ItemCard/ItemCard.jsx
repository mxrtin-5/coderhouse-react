import {Link} from 'react-router-dom'

export const ItemCard = ({item}) => {
    return (
        <div key={item.id} className='col-3 m-2'>
            <h4>{item.nombre}</h4>
            <img className='imagen' src={item.img} alt="" />
            <p>{item.descripcion}</p>
            <p>${item.price}</p>
            {item.stock < 10 && <p className='text-red-500'>Quedan solo {item.stock} unidades</p>}
            <Link className="btn btn-primary" to={`/detail/${item.id}`}>Agregar al carrito</Link>
        </div>
    )
}