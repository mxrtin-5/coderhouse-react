import { pedirDatos } from '../../helpers/PedirDatos'
import { useState } from 'react'
import { useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'
import { useParams } from 'react-router-dom'




export const ItemListContainer = () => {

    const {productos, loading} = useProductos() // asi se desestructura y se extrae el valor de productos

    console.log(loading, productos )

    const params = useParams()
    console.log(params)

    return (

        <section>
            {
                loading 
                    ? <h2>Cargando...</h2>
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