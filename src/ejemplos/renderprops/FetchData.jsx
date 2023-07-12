import { useEffect, useState } from "react"


export const FetchData = ({ url, arr =[], children}) =>{


    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, arr)


    return(
        <>
            {children(data)}
        </>
    )
}