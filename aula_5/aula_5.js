const API_URL = "https://6a557802e49d9eb2cc55c2fd.mockapi.io/produtos";

async function buscarProduto() {
    try {
        const resposta = await fetch(API_URL);
        const produtos = resposta.json();

        popularTabela(produtos);
    } catch (error) {
        console.error(error);
    }
}

function popularTabela(produtos) {
    let html = "";

    for(const produto of produtos) {
        html += `
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `;
    }
}

function calcularTotal(preco, quantidade) {

}

buscarProduto();