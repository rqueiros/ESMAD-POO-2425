// 1. Criando o objeto com entrada do utilizador
/* let compra = {
    nomeProduto: prompt("Digite o nome do produto:"),
    catProduto: prompt("Digite a categoria do produto:")
}; */

let compra = {
    nomeProduto: "XPTO",
    catProduto: "AAA"
};

// 2. Imprimindo o objeto inicial
console.log("Objeto inicial:", compra);

// 3. Adicionando precoBase
compra.precoBase = 2.10;

// 4. Adicionando txIVA e imprimindo novamente
compra.txIVA = 23;
console.log("Objeto após adicionar precoBase e txIVA:", compra);

// 5. Alterando precoBase para 2.50
compra.precoBase = 2.50;

// 6. Criando precoFinal com base no precoBase e txIVA
compra.precoFinal = function() {
    return this.precoBase + (this.precoBase * this.txIVA / 100);
};

console.log("Preço final com IVA:", compra.precoFinal());


// 7. Criando o subobjeto dadosEncomenda
compra.dadosEncomenda = {
    dataEncomenda: "2023-03-27",
    prazoEntrega: 7,
    localEntrega: "Avenida do Mar, 74, 4460-810 Matosinhos"
};

// 8. Função para mostrar o número de propriedades do objeto
function showLength() {
    console.log("Número de propriedades:", Object.keys(compra).length);
}

// 9. Função para listar todas as propriedades do objeto
function showProperties() {
    console.log("Propriedades do objeto:", Object.keys(compra));
}

// 10. Função para remover uma propriedade específica do objeto
function removeProp(prop) {
    if (compra.hasOwnProperty(prop)) {
        delete compra[prop];
        console.log(`Propriedade '${prop}' removida.`);
    } else {
        console.log(`Propriedade '${prop}' não encontrada.`);
    }
}

