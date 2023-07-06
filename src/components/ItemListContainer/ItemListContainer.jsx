import { PedirDatos } from '../../helpers/PedirDatos'
import { useState } from 'react'
import { useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'





export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]) // a useState se le pasa el valor inicial que va a tomar 'productos'


    useEffect(() => {
        PedirDatos()
            .then((res) => {
                setProductos(res)
                console.log(productos)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    console.log(productos)


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) =>resp.json())
            .then ((data) =>{
                console.log(data)
            })
    }, [])

    

    return (

        <section>
            <ItemList productos={productos}/>
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