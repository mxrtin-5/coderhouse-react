import { Menu } from '../Menu/Menu'
import './Header.css'


export const Header = () =>{

    return(

        <header>
            <div className='header_container'>
                <h2 className='title'>AtomicMoonlight</h2>
                
                <Menu />
            </div>  
        </header>

        
    )
}