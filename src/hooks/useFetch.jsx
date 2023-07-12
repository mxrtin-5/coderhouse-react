import { useEffect, useState } from "react"



export const useFetch = (url, arr = []) =>{ // se pasa un segundo parametro arr con valor por defecto de [], para asi no alterar la estructura del useEffect

const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, arr)

    return{ data }

}