import MOCK_DATA from '../data/MOCK_DATA.json'


export const PedirDatos = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(MOCK_DATA);
        }, 3000)
    })
}
