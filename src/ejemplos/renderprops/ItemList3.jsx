import { ProductsData } from "./ProductsData"
import { ItemCard } from '../../components/ItemCard/ItemCard'


export const ItemList3 = () =>{


    return(
        <div className="container my-5">
            <h2>Productos</h2>
            <hr />

            <ProductsData>
                {(productos, loading) => (
                    <div className="row">
                        {
                            loading 
                                ? <h2>Cargando</h2>
                                : productos.map((prod) => <ItemCard key={prod.id} item={prod} />)
                        }
                    </div>
                )}
            </ProductsData>
        </div>
    )
}