import { useProductos } from "../../hooks/useProductos"




export const Contacto = () =>{
    const { productos } = useProductos()
    console.log(productos)

    return(
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr />
        </div>
    )
}