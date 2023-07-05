

export const ItemCard = ({item}) => {
    return (
        <div key={item.id} className='col-3 m-2'>
            <h4>{item.nombre}</h4>
            <img className='imagen' src={item.img} alt="" />
            <p>{item.descripcion}</p>
            <p>${item.price}</p>
            <button className='btn btn-primary'>CLick me</button>
        </div>
    )
}