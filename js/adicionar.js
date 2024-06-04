import { postProdutos } from "./produto.js";

const nomeCampo = document.getElementById('nome')
const categoriaCampo = document.getElementById('categoria')
const precoCampo = document.getElementById('preco')
const descontoCampo = document.getElementById('desconto')
const descricaoCampo = document.getElementById('descricao')
const quantidadeCampo = document.getElementById('quantidade')
const ingredientesCampo = document.getElementById('ingredientes')


const button = document.querySelector('button')
button.addEventListener('click',async ()=>{
    const json = {
        nome: nomeCampo.value,
        categoria: categoriaCampo.value,
        preco: precoCampo.value,
        desconto: descontoCampo.value,
        descricao: descricaoCampo.value,
        quantidade: quantidadeCampo.value,
        ingredientes: ingredientesCampo.value,

    }
    const result = await postProdutos(json)
    if(result){
        window.location.href='../index.html'
    } else {
        alert("Deu erro aí, fi")
    }
})