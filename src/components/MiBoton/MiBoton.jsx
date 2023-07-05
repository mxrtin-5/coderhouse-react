


export const MiBoton = ({children, color, click}) =>{
    const style ={
        backgroundColor: color,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '7px',
        cursor: 'pointer'
    }

    return(
        <button style={style} onClick={click}>
            {children}
        </button>
    )
}