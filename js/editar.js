import { getProduto, putProdutos } from "./produto.js";
const idProduto = new URLSearchParams(window.location.search).get('idProduto');

const infoProduto = await getProduto(idProduto)
console.log(infoProduto)

const nomeCampo = document.getElementById('nome')

nomeCampo.value = infoProduto.nome


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nome: nomeCampo.value
    }
    console.log(json);
    const result = await putProdutos(idProduto,json)
    console.log(result);
    if(result){
        window.location.href='../index.html'
    } else {
        alert("Deu erro aí, fi")
    }
})