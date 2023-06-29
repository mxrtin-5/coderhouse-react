


export const Contenedor = ({children}) =>{
    console.log(children)
    return(
        <div style={{background: 'grey', color: 'white', padding:'20px', margin:'0 auto, maxWidth: 1100px '}}>
            <h2>Un titulo</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi est id et. Numquam, error consequuntur quod dicta quisquam enim placeat impedit, magnam tenetur voluptatum magni id eius ex rem.</p>

            {children}
        </div>
    )
}