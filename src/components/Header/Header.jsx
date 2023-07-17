import './Header.css'
import { Link } from 'react-router-dom'


export const Header = () =>{

    return(

        <header>
            <nav className='navbar'>

                <h2 className='title'>AtomicMoonlight</h2>

                <ul>
                    <li className='li active'><Link to="/">Home</Link></li>
                    <li className='li'><Link to="/">Services</Link></li>
                    <li className='li'><Link to="/pokeapi">Pokeapi</Link></li>
                    <li className='li'><Link to="/">About</Link></li>
                    <li className='li'><Link to="/contacto">Contact</Link></li>
                </ul>


            </nav>

        </header>

        
    )
}