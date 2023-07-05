import { useRef, useState } from "react"
import './UseRef.css'



export const UseRef = () =>{


    const divRef = useRef(null)

    const handleClick = () =>{
        divRef.current.innerHTML = 'nuevo contenido'
    };

    return (
        <div>
            <div ref={divRef}>Contenido original</div>
            <button className="button" onClick={handleClick}>Cambiar contenido</button>
        </div>
    );
}

export const UseRef2 = () =>{
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)

    renderCount.current++

    return(
        
        <div>
            <p>contador: {count}</p>
            <button onClick={ () => setCount( count => count +1)}></button>
            <p>este componente se ha renderizad {renderCount.current} veces.</p>
        </div>
    )
}