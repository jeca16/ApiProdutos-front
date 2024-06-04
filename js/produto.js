export async function getProdutos(){
    const url = 'http://localhost:8080/produtos'
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function getProduto(id){
    const url = 'http://localhost:8080/produtos/'+id
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export async function postProdutos(produtos){
    const url = `http://localhost:8080/produtos`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtos)
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function putProdutos(produtosId, produtos){
    const url = `http://localhost:8080/produtos/${produtosId}`
    console.log(produtosId);
    console.log(produtos)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtos)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteProdutos(produtosId){
    const url = `http://localhost:8080/produtos/${produtosId}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}