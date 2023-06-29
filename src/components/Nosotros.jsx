import { useRef } from "react"
export const Nosotros = () =>{

    const ref = useRef()

    console.log(ref.current)

    const scrollear = () =>{
        ref.current.scrollIntoView()
        ref.current.innerText ='hola mundo'
    }

    return(


        <div>
            <h2>Nosotros</h2>

            <button onClick={scrollear}>Scroll</button>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae nam necessitatibus repudiandae nesciunt nihil architecto exercitationem maiores veritatis maxime consequatur, similique ratione a ad deserunt, in praesentium. Hic, dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae nam necessitatibus repudiandae nesciunt nihil architecto exercitationem maiores veritatis maxime consequatur, similique ratione a ad deserunt, in praesentium. Hic, dolorem.</p>
            <p ref={ref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae nam necessitatibus repudiandae nesciunt nihil architecto exercitationem maiores veritatis maxime consequatur, similique ratione a ad deserunt, in praesentium. Hic, dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae nam necessitatibus repudiandae nesciunt nihil architecto exercitationem maiores veritatis maxime consequatur, similique ratione a ad deserunt, in praesentium. Hic, dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae nam necessitatibus repudiandae nesciunt nihil architecto exercitationem maiores veritatis maxime consequatur, similique ratione a ad deserunt, in praesentium. Hic, dolorem.</p>

        </div>
    )
}