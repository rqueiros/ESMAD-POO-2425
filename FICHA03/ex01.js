// Exercício 1
let nomeProduto = prompt("Nome do produto:");
let catProduto = prompt("Categoria do produto:");

let compra = {
    nomeProduto: nomeProduto,
    catProduto: catProduto
};

// Exercício 2
console.log("Objeto inicial:", compra);

// Exercício 3
compra.precoBase = 2.10;

// Exercício 4
compra.txIVA = 23;
console.log("Com precoBase e txIVA:", compra);

// Exercício 5
compra.precoBase = 2.50;

// Exercício 6
compra.precoFinal = function () {
    return this.precoBase * (1 + this.txIVA / 100);
};

console.log(`Preço final: ${compra.precoFinal().toFixed(2)} €`);

// Exercício 7
compra.dadosEncomenda = {
    dataEncomenda: "2023-03-27",
    prazoEntrega: "7 dias",
    localEntrega: "Avenida do Mar, 74, 4460-810 Matosinhos"
};

console.log("Objeto com subobjeto:", compra);

// Exercício 8
function showLength(obj) {
    console.log(`Número de propriedades: ${Object.keys(obj).length}`);
}
showLength(compra);

// Exercício 9
function showProperties(obj) {
    console.log("Propriedades do objeto:");
    for (let prop in obj) {
        console.log(prop);
    }
}
showProperties(compra);

// Exercício 10
function removeProp(prop) {
    delete compra[prop];
    console.log(`Propriedade '${prop}' removida (se existia).`);
}
removeProp("txIVA");
console.log("Objeto após remoção:", compra);
