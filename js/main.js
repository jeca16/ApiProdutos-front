import { getProdutos, postProdutos, putProdutos, deleteProdutos } from "./produto.js";

function criarCard(produto){
    const card = document.createElement('div')
    const img = document.createElement('p')
    const nome = document.createElement('h2')
    const categoria = document.createElement('p')
    const preco = document.createElement('p')
    const desconto = document.createElement('p')
    const descricao = document.createElement('p')
    const quantidade = document.createElement('p')
    const ingredientes = document.createElement('p')
    const divIcones = document.createElement('div')
    divIcones.classList.add('divIcones')
    const iconeDeletar = document.createElement('img')
    iconeDeletar.style.height='100%'
    iconeDeletar.src = '../img/excluir.png'
    const iconeAtualizar = document.createElement('img')
    iconeAtualizar.style.height='50%'
    iconeAtualizar.src = '../img/editar produto.png'
    nome.textContent = produto.nome
    categoria.textContent = "Categoria: "+ produto.categoria
    preco.textContent = "Preço: "+ produto.preco
    desconto.textContent = "Desconto: "+ produto.desconto
    descricao.textContent = "Descrição: "+ produto.descricao
    quantidade.textContent = "Quantidade: "+ produto.quantidade
    ingredientes.textContent = "Ingredientes: " + produto.ingredientes
    img.textContent = produto.imagem

    const iconeAdicionar = document.getElementById('adicionar')

    iconeAdicionar.addEventListener('click', ()=>{
        window.location.href = '../pages/adicionar.html'
    })

    
    divIcones.replaceChildren(iconeDeletar,iconeAtualizar)

    iconeDeletar.addEventListener('click',()=>{
        deleteProdutos(produto.id)
        window.location.reload()
    })

    iconeAtualizar.addEventListener('click',()=>{
        window.location.href='../pages/editar.html?idProduto='+produto.id
    })

    card.append(nome, categoria, preco, desconto, descricao, quantidade, ingredientes, img, divIcones)
    return card
}

    const containerProduto = document.getElementById('produtos')
    const produtos = await getProdutos()
    produtos.forEach(produto => {
        const card = criarCard(produto)
        containerProduto.appendChild(card)
    })
