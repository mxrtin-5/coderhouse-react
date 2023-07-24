import { useContext } from 'react'
import { Menu } from '../Menu/Menu'
import './Header.css'
import { DarkModeContext } from '../../context/DarkModeContext'
import CartWidget from '../CartWidget/CartWidget'


export const Header = () =>{

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    console.log(darkMode);

    //how can i put some styles to CartWidget? i want to put it on the rigth and center it 

    return(

        <header>
            <div className='header_container'>
                <h2 className='title'>AtomicMoonlight</h2>
                <div className='div-mode'>
                    <button className='btn-mode' onClick={toggleDarkMode}>{darkMode ? 'Modo oscuro' : 'Modo claro'}</button>
                </div>
                <CartWidget className="widget"/>
                <Menu />
            </div>  
        </header>

        
    )
}