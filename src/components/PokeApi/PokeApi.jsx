import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export const PokeApi = () => {

    // const [pokemon, setPokemon] = useState(null)// se establece el valor de pokemon en null ya que en un inicio no hay valores
    const [id, setId] = useState(1)

    const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])


    // si no se usara un useEffecct habria que hacer el mismo fetch en los botones

const handleSiguiente = () => setId(id + 1)
const handleAnterior = () => id > 1 && setId(id - 1)

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr />
            {
                //op logico AND
                //tambien se puede hacer con op ternario
                pokemon && //si pokemon posee un valor truthy se muestara lo siguiente del &&
                <div>
                    <h4>{pokemon.name}</h4>
                    <img className="d-block" src={pokemon.sprites.front_default} alt="" />
                </div>
            }

<button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
<button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>
        </div>
    )
}