import axios from 'axios';

export async function getEmpresas(){
    const resposta = await axios.get('http://localhost:4000/empresas')
    .then((response)=>{
        console.log(response)
        return response
    } )
    if(resposta) return resposta;
    else return null;
}

export async function getAreas(){
    const resposta = await axios.get('http://localhost:4000/areas')
    .then((response)=>{
        console.log(response)
        return response
    } )
    if(resposta) return resposta;
    else return null;
}