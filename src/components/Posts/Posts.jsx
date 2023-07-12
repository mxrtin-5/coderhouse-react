import { useFetch } from "../../hooks/useFetch"



export const Posts = () =>{
    const {data: post} = useFetch('https://jsonplaceholder.typicode.com/posts')

    return(
        <div>
            <h2>Json Placeholder</h2>
            <hr />

            {
                post && post.map(posts =>(
                    <div key={posts.id}>
                        <h4>{posts.title}</h4>
                        <p>{posts.body}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}