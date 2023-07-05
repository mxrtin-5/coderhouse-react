import { ItemCard } from "../ItemCard/ItemCard"


export const ItemList = ({productos}) => {


    const usuarios = [
        { id: 1, nombre: 'fede' }, { id: 2, nombre: 'Ivan' }, { id: 3, nombre: 'Pablo' }
    ]

    const resultado = usuarios.map((user) => user.id)
    console.log(resultado)


    return (

        <div className="container">

            <div className='row'>

                {usuarios.map((el) => <h4>{el.nombre}</h4>)}

                {
                    productos.map((el) => <ItemCard item={el}/>)
                }
            </div>
        </div>
    )
}