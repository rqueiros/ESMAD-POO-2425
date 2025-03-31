// Importa módulo data.js
import * as data from "./data.js"
let listUsers = []
listUsers = data.init()
console.log(listUsers);

// Alínea 1
function listarNivel(nivel) {
    const nomes = listUsers
        .filter(u => u.nivel === nivel)
        .map(u => u.nome)
        .join(", ");
    alert(`Jogadores no nível ${nivel}: ${nomes}`);
}

// Alínea 2
function somarPontos(nivel) {
    const total = listUsers
        .filter(u => u.nivel === nivel)
        .reduce((acc, u) => acc + u.pontos, 0);
    console.log(`Total de pontos no nível ${nivel}: ${total}`);
}

// Alínea 3
function verificarNivel(nivel) {
    const existe = listUsers.some(u => u.nivel === nivel);
    console.log(`Existe jogador no nível ${nivel}? ${existe}`);
    return existe;
}

// Alínea 4
function pesquisarColecionaveis(colecionavel) {
    const existe = listUsers.some(u => u.colecionaveis.includes(colecionavel));
    console.log(`Existe jogador com '${colecionavel}'? ${existe}`);
    return existe;
}

// Alínea 5
function mostrarJogadores(colecionavel) {
    const nomes = listUsers
        .filter(u => u.colecionaveis.includes(colecionavel))
        .map(u => u.nome)
        .join(", ");
    alert(`Jogadores com '${colecionavel}': ${nomes}`);
}

// Alínea 6
function listaTabClass() {
    const lista = listUsers
        .slice()
        .sort((a, b) => b.pontos - a.pontos)
        .map(u => `${u.nome}: ${u.pontos} pontos`)
        .join("\n");
    alert(`Classificação:\n${lista}`);
}

// Alínea 7
function giveReward(nivel) {
    listUsers.forEach(u => {
        if (u.nivel === nivel) {
            u.pontos += 100;
        }
    });
    console.log(`Recompensa atribuída a jogadores do nível ${nivel}.`);
}

// Alínea 8
function sumPontos() {
    const total = listUsers.reduce((acc, u) => acc + u.pontos, 0);
    console.log(`Total de pontos de todos os jogadores: ${total}`);
}
