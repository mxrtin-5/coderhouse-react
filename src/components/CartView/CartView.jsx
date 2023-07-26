import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";



const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext);

    if(cart.length === 0){
        return(
            <div>
                <h2>Tu carrito esta vacio :(</h2>
                <hr />
                <Link to='/'><button className="btn btn-success">Ir al inicio</button></Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="text-4xl">Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.img} alt={item.name}/>
                        <p>Precio: ${item.price * item.counter}</p>
                        <p>Cantidad: {item.counter}</p>
                        <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger"><FaTrashAlt/></button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h4 className="text-3xl my-2">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
            </div>
        </div>
    )
}

export default CartView