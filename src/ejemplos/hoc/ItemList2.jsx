import { ItemCard } from "../../components/ItemCard/ItemCard"
import { withProductsData } from "./withProductsData"



const ItemList2 = ({productos, loading, saludo}) =>{


    return(
        <div className="container">

            <h2>Productos</h2>

            <h3>{saludo}</h3>

            <div className='row'>


                {
                    loading
                    ? <h2>Cargando...</h2>
                    : productos.map((el) => <ItemCard item={el}/>)
                }
            </div>
        </div>
    )
}

export default withProductsData(ItemList2)


export const Contacto2 = withProductsData(({productos, loading}) =>{
    
    console.log(productos,loading)

    return(
    <div>
        <h2 className="text-blue-800">Contacto 2</h2>
    </div>
    )
})


