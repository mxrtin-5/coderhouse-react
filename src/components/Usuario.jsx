
export const Usuario = ({nombre, edad, rol}) =>{// se pasan los nnombres de las propiesdades como parametros de la funcion, desestructurandp asi instantaneamente, ya que las propiedades son simpre objetos

    return(
        <div>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Rol: {rol}</p>
        </div>
    )
}

/*
/Siempre empiezan con mayusculas los componentes 
export const Usuario = (props) =>{
    console.log(props) // los parametros de las funciones, se los denomina propiedades, se les pasa un solo parametro/propiedad
    return(
        <div>
            <h3>{props.nombre}</h3>
            <p>{props.rol}</p>
            <p>{props.edad}</p>
        </div>
    )
}
*/

/*
export const Usuario = (props) =>{

    const{nombre, edad, rol} = props

    console.log(props) 
    return(
        <div>
            <h3>{nombre}</h3>
            <p>{edad}</p>
            <p>{rol}</p>
        </div>
    )
}
*/