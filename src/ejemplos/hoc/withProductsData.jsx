


// HOC => HOF (high order funcitons)
// una funcion de orden superior es una funcion que toma una funcion por parametro y/o retorna una funcion

import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"



//las HOC toman un componente por parametro y retorna otro componente
//el componente que retorna envuelve al que recibe


// function hoc(Comp){

//     return Comp2
// }

export const withProductsData = (Component) =>{

    const WithProductsData = (props) =>{
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

            return <Component productos={productos} loading={loading} {...props} />// el ...props es por si se quiere que pueda recibir mas propiedades

    }

    return WithProductsData

}

// el componente que sale es el componente que entra pero envuelto por otro

