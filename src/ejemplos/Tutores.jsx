import { Usuario } from "../components/Usuario"

export const Tutores = () =>{ // todos los componentes empiezan con mayusculas
    // un modulo por componente
    // los compo
    return ( // esto para que quede mas prolijo
    <div className="Tutores"> {/* esto es un componente, y los componentes pueden devolver unicamente un elemento padre, en este caso el div */}
        <h3>tutores</h3>

        <ul>
            <Usuario nombre="Juan Lanusse" rol="Profesor" edad={22}/>
            <Usuario nombre="Fede Luk" rol="Tutor" edad={64}/>
            <Usuario nombre="Fede Luk" rol="Tutor" edad={64}/>
        </ul>
    </div>
    ) 
}

