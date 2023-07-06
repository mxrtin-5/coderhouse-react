import { useState, useEffect } from "react"



export const PokeCard = ({url}) =>{

    const [pokemon, setPokemon] = useState(null)


        useEffect(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setPokemon(data)
                })
        }, []);


    return(
        <div className="col-3 m-2">
            {
                
                pokemon &&
                <div>
                    <img className="d-block w-100" src={pokemon.sprites.front_default} alt="" />
                    <h4>{pokemon.name}</h4>
                </div>
            }
        </div>

    )
}

/*
Se crea la funcion PokeCard la cual va a contener la plantilla de tablas de los elementos
Se crea un useState que se inicia en null para pq no hay valor inicial, donde setPokemon va a setear el valor de pokemon
se hace un useEffect con un array como segundo parametro para asi que solo se ejecute en el montage de la pp
este useEffect hace un fetch de la url que entra como parametro
.then se guarda la respuesta y se hace un .json
despues se crea un then que tiene data por parametro y que setea el valor de pokemon con el valor de data, siendo data el valor que recibe del fecth
se retorna un div padre
y si pokkemon es truthy es decir existe, entonces se ejecuta el div con imagen y no mbre de los pokemones
la imagen recibe como src = {pokemon.sprites.front_default} esto hace que la direccion de la imagen sea de ese valor conseguido del fetch

*/