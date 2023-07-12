import { useEffect, useState } from "react"
import { pedirDatos } from '../helpers/PedirDatos'


export const useProductos = () =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then(r=> setProductos(r))
        .catch(e => console.log(e))
        .finally(()=>{
            setLoading(false)
        })
    }, []);


    return { productos, loading } // se retorna un objeto pq capaz se quiere retornar mas cosas del hook
}