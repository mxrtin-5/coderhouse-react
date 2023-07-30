import { useState } from 'react'
import { useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
//import { useProductos } from '../../hooks/useProductos'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'




export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        
        //1- armar la referencia
        const productoRef = collection(db, 'productos') // db es la base de datos en cuestion y como segundo parametro que coleccion de esa base de datos
        const q =categoryId
                        ? query(productoRef, where('category', '==', categoryId))
                        : productoRef
        // aqui se hace una consulta QUERY, de PRODUCTOREF, donde (WHERE) la categoria sea === a CATEGORYID
        //2- llamar a esa ref (async)
        getDocs(q) //con la funcion getDocs llamo a la coleccion, que esta llama a la base de datos
            .then((resp)=>{// entonces esto responde (RESP trae una snapshot de la coleccion, o sea el paquete que lo envuelve)
                const docs = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data(),//para traer todo el contenido del documento en un solo objeto
                    }
                })// con esta informacion se accede a la propiedad docs de la misma, y que por cada documento, que extraiga el data (su informacion)
                console.log(docs);// se muestra lo anterior
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId]);

    return (

        <section>
            {
                loading 
                    ? <Loader />
                    : <ItemList productos={productos}/>
            }
        </section>
    )
}

/*
const pedirDatos = (bool) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(bool){
                    resolve('Promesa resuelta')
                }else{
                    reject('Rechazadoo')
                }
            }, 3000)
        })
    }

    pedirDatos(true)
                .then(()=>{
                    console.log('Hola Mundo')
                })
                .catch(() =>{
                    console.log('Chau mundo')
                })


    const promesa = new Promise((resolve, reject)=>{ // una promesa recibe dos parametros, siendo la primera resolve  y la segunda reject
        setTimeout(()=>{
            resolve('Promesa resuelta')
            //reject('Promesa rechazada')
        }, 2000)
    })


    promesa.catch(()=>{
        console.log("Adiós, mundo cruel!")
    })

    promesa.then(()=>{
        console.log("Hola") //ejecuta la función cuando se resuleve la
    })//recibe una funcion como parametro el then


promesa
        .then(()=>{
            console.log('Hola buenas')
        })
        .catch(()=>{
            console.log('Chau malas')
        })
*/