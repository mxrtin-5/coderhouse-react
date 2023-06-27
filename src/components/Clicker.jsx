import { useState } from "react"


export const Clicker = () =>{ 

    const [counter, setCounter] = useState(1)
    const [saludo, setSaludo] = useState(true)

    //let counter = 0

    const clickear = () =>{
        setCounter(counter + 1)
    }

    const cambiarSaludo = () =>{
        setSaludo(!saludo)
    }

    return(
        <div>
            <h2>Clicker</h2>
            <hr />
            <button onClick={clickear}>Click me</button>
            <p>Clicks: {counter}</p>
            <hr />
            <button onClick={cambiarSaludo}>Saludar</button>
            <p className="{saludar ? 'Hola' : 'Chau'}">{ saludo ? 'Hola mundo' : 'Chau mundo' }</p> {/* Render condicional */}
        </div>
    )
}