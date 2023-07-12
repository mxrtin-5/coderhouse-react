import { FetchData } from "../../ejemplos/renderprops/FetchData"
import { useFetch } from "../../hooks/useFetch"





export const Posts = () =>{

    return(
        <div>
            <h2>Json Placeholder</h2>
            <hr />

            <FetchData url={'https://jsonplaceholder.typicode.com/posts'}>

                {(data) =>(
                    <>
                    {
                        
                        data && data.map(data =>(
                            <div key={data.id}>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                                <hr />
                            </div>
                        ))
                    
                    }
                    
                    </>
                )}
            

            </FetchData>
        </div>
    )
}









// export const Posts = () =>{
//     const {data: post} = useFetch('https://jsonplaceholder.typicode.com/posts')

//     return(
//         <div>
//             <h2>Json Placeholder</h2>
//             <hr />

//             {
//                 post && post.map(posts =>(
//                     <div key={posts.id}>
//                         <h4>{posts.title}</h4>
//                         <p>{posts.body}</p>
//                         <hr />
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }