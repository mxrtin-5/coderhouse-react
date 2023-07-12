// se pueden importar imagenes y guardarlas en variables
//import bienvenida from './saludos'   primera manera de importar, el primer parametro del import es la variable en la que se almacena
// este metodo siempre importa el export default
import { bienvenida as saludo, despedida } from './saludos'  //segunda menera de importar
// este metodo es mucho mas especifico
// el as hace que se le pueda poner alias a las variables que se importan
import { Tutores } from './ejemplos/Tutores'
import { Clicker } from './components/Clicker/Clicker';
import { Container, Titulo } from './components/Patrones/Patrones';
import { Item } from './components/Patrones/Patrones';
import { Contenedor } from './components/Contenedor/Contenedor';
import {MiBoton} from './components/MiBoton/MiBoton'
import { Nosotros } from './components/Nosotros/Nosotros';
import { UseRef, UseRef2 } from './components/UseRef/UseRef';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PokeApi } from './components/PokeApi/PokeApi';
import { PokeList } from './components/PokeApi/PokeList';
import { Contacto } from './components/Contacto/Contacto';
import { Posts } from './components/Posts/Posts';



function App() {

  saludo();
  despedida();

  const saludar = () =>{
    console.log('Hola')
  }

  const despedida1 = () =>{
    console.log("Adiós")
  }
  
  const profe = 'Conrado Lanusse'

  return (

    <>

    
      <br/> {/* Los elementos como el br o img que se tienen que cerrar para no causar problemas */}
      <h1>{profe}</h1> {/* usar la // hace inserciones javascript en xml se pueden hacer eventos dentro de xml se puede invocar funciones en linea*/}
      
      <button className='btn btn-primary'>Click me</button>
      {/* <ItemListContainer/> */}

      <Contacto />

      <PokeApi/>
      <Posts/>
      {/* <PokeList/>  */}
      
      {/*<MiBoton color="blueviolet" click={saludar}>
        Click me <img src='/vite.svg'></img>
      </MiBoton>
      <MiBoton color="green" click={despedida1}>
        Click me <img src='/vite.svg'></img>
      </MiBoton>
      <Contenedor>
      <Tutores />
      <Titulo/>
      <Item />
      <hr />
      <Container />
      </Contenedor>

      <hr />

      <Clicker/>

      <hr />

      <Nosotros/>

      <hr />

      <UseRef/>

      <hr />

      <UseRef2/>*/}
      
    </>
  )
}

// un componente es una funcion que retorna un bloque de codigo jsx


export default App
