import { useState, useRef, useEffect } from "react"


export const Clicker = () => {

    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState(true)

    //let counter = 0

    const clickear = () => {
        setCounter(counter + 1)
    }

    const cambiarSaludo = () => {
        setSaludo(!saludo)
    }

    const date = useRef(new Date())

    if(counter % 10 === 0){
        date.current = new Date()
    }

    console.log(date.current)

    useEffect(()=>{
        console.log(counter)
        console.log('componente clicker')
        //funcion o efecto de limpieza

        return ()=>{
            console.log(counter);
            console.log('Limpieza')
        }

    }, [counter]);


    useEffect(()=>{
        const interval = setTimeout(()=>{
            console.log('hola mundo')
        }, 2000);

        return()=>{
            clearTimeout(interval)
        }
    }, [saludo]);

    return (
        <div>
            <h2>Clicker</h2>
            <hr />
            <p>Componente generado: {date.current.toLocaleString()}</p>
            <button onClick={clickear}>Click me</button>
            <p>Clicks: {counter}</p>
            <hr />
            <button onClick={cambiarSaludo}>Saludar</button>
            <p className={saludo ? 'Hola' : 'Chau'}>{saludo ? 'Hola mundo' : 'Chau mundo'}</p> {/* Render condicional */}
        </div>
    )
}