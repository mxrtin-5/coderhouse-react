import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



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

        //1- armar la ref
        const itemRef = doc(db, "productos", itemId )
        //doc arma la referencia al documento, la referencia, o sea de donde se busca es de DB, luego el nombre de la coleccion, y luego se le dice que documento se requiere

        //2- llamar a la ref
        getDoc(itemRef)
            .then((doc)=>{ //esto trae el snapshot del doc
                console.log(doc.id)
                console.log(doc.data());
                setItem({ // y se setea a item, el id y el resto de los datos
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    return(
        <div className="container my-5">
            {
                loading
                    ?<Loader />
                    : <ItemDetail item={item}/>
            }

        </div>
    )
}