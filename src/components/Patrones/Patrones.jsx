import { useState } from "react";



export const Titulo = ({ text })=> {
    return (
        <h1>{text}</h1>
    )
}

export const Item = ({ name }) =>{

    return (
        <li>{name}</li>
    )

};

export const Container = () =>{
    const [country, setCountry] = useState('Argentina');

    const handleOnConfirm = (countryName) =>{
        setCountry(countryName)
    }

    return(
        <div>
            <form OnConfirm={handleOnConfirm}></form>
            <title text={country}></title>
        </div>
    )
}
