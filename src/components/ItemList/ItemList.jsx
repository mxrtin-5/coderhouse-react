import { ItemCard } from "../ItemCard/ItemCard"


export const ItemList = ({productos}) => {


    return (

        <div className="container">

            <div className='row'>
                {
                    productos.map((el) => <ItemCard item={el}/>)
                }
            </div>
        </div>
    )
}