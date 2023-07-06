import { useEffect, useState } from "react";
import { PokeCard } from "./PokeCard";


export const PokeList = () => {

    const [list, setList] = useState([])
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [pagination, setPagination] = useState({
        next: null,
        previous:null
    })

    /*
    se crea const [list, setList] = useState([]) inicializado con un array vacio siendo list la lista en si y setList la funcion que setea el valor a list
    se crea  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`) siendo esa url la url raiz, la funcion setUrl setea el valor de la url en "url" 
    se crea const [pagination, setPagination] = useState({
        next: null,
        previous:null
    })
    donde el valor por defecto del useState es un objeto con los parametros next y previous seteados en null por defecto
    */

    console.log(list)
    console.log(pagination)


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setList(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url]);

    /*
    Se hace un useEffect que se actualiza solo cuando la variable url cambia
    setea el valor de list con los datos de data.results (siendo data el valor de respuesta del fetch) con el valor results de la informacion que se recibe del fetch siendo results lo que almacena a cada pokemon con su nombre y url
    y a su vez setea el valor de pagination con next como el valor next de data, y previous con data.previous, siendo estos parametros recibidos del fetch, siendo next, la pagina con los siguientes pokemones y previous la pagina con los anteriores
    */

    // si no se usara un useEffecct habria que hacer el mismo fetch en los botones

const handleSiguiente = () => {
    pagination.next && setUrl(pagination.next)
}
const handleAnterior = () =>{
    pagination.previous && setUrl(pagination.previous)
}

/*
se crea la funcion para pasar a la siguiente y a la anterior url
y la linea pagination.next && setUrl(pagination.next) y     pagination.previous && setUrl(pagination.previous)
validando asi que si pagination.next existe, haga el set de la url con el valor de pagination.next
y viceversa

*/

    return (
        <div className="container my-5">
            <h2>PokeList</h2>
            <hr />

            <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>

            <div className="row">

                {
                    list.map((el) => <PokeCard key={el.name} url={el.url}/>)
        //se hace un map de "el"  esto retorna <PokeCard/> con key el.name y una url que pasa por parametro
        // "el" representa a cada elemento a iterar
                }
            </div>


        </div>
    )
}