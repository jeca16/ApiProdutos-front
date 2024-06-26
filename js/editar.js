import { getProduto, putProdutos } from "./produto.js";
const idProduto = new URLSearchParams(window.location.search).get('idProduto');

const infoProduto = await getProduto(idProduto)

const nomeCampo = document.getElementById('nome')
const categoriaCampo = document.getElementById('categoria')
const precoCampo = document.getElementById('preco')
const descontoCampo = document.getElementById('desconto')
const descricaoCampo = document.getElementById('descricao')
const quantidadeCampo = document.getElementById('quantidade')
const ingredientesCampo = document.getElementById('ingredientes')

nomeCampo.value = infoProduto.nome
categoriaCampo.value = infoProduto.categoria
precoCampo.value = infoProduto.preco
descontoCampo.value = infoProduto.desconto
descricaoCampo.value = infoProduto.descricao
quantidadeCampo.value = infoProduto.quantidade
ingredientesCampo.value = infoProduto.ingredientes


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
    const result = await putProdutos(idProduto,json, idProduto)
    if(result){
        window.location.href='../index.html'
    } else {
        alert("Deu erro aí, fi")
    }
})