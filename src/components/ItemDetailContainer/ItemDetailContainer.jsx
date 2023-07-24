import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () =>{

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    // console.log(itemId) // esto devuelve lo que sea que pongas luego de /detail/...
    // /detail/pito => pito
    // /detail/true => true
    //no sabe que es un id a menos que se lo indiquemos

    // console.log(item)

    
    useEffect(()=>{
        setLoading(true)

        pedirDatos()
        .then(r=>{
            setItem(r.find(prod => prod.id === Number(itemId)) ) // aqui o que dice es
            // que busque en la respuesta, el prod, cuyo id => la propiedad id de MOCK DATA sea igual al id ingresado, o sea el id que se paso por parametro
        })
        .finally(() => setLoading(false))
    }, [])

    return(
        <div className="container my-5">
            {
                loading
                    ?<h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }

        </div>
    )
}