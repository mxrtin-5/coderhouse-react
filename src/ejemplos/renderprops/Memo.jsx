import { memo } from "react"


export const Memo = memo(() =>{
    console.log('holiiiii memo')

    //proceso pesado

    for(let i = 0; i < 1000; i++){
        console.log(i)
    }

    return(
        <div>
            Soy un comp memo
        </div>
    )
})