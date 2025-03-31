
// Importa modulo data.js
import * as data from "./data.js";

let listUsers = []
listUsers = data.init();

// 1) Listar nome de jogadores baseado em nível
/* const nivelUtilizador = +prompt("Digite o nível dos jogadores que deseja listar:");
if (!isNaN(nivelUtilizador)) {
    listarNivel(nivelUtilizador);
} else {
    alert("Por favor, insira um número válido.");
} */

function listarNivel(nivel) {
    const filtrados = listUsers.filter(jogador => jogador.nivel === nivel);
    const nomesFiltrados = filtrados.map(j => j.nome).join("\n")
    if (filtrados.length > 0) {
        alert(`Jogadores do nível ${nivel} \n ${nomesFiltrados}`);
    } else {
        alert(`Nenhum jogador encontrado no nível ${nivel}`);
    }
}

// 2) Listar a soma de pontos de um jogador de determinado nível
//somarPontos(2)
function somarPontos(nivel) {
    const totalPontos = listUsers
        .filter(jogador => jogador.nivel === nivel)
        .reduce((soma, jogador) => soma + jogador.pontos, 0);

    console.log(`Total de pontos dos jogadores do nível ${nivel}: ${totalPontos}`);
}

// 3) Devolver true ou false relativamente à existência de pelo menos um jogador de um nível passado como parâmetro
//console.log(verificarNivel(4));

function verificarNivel(nivel) {
    return listUsers.some(jogador => jogador.nivel === nivel);
}

// 4) Pesquisar colecionaiveis
//const colecionavel = 'badge 3'
//console.log(`Colecionável ${colecionavel}: ${pesquisarColecionaveis(colecionavel)}`);

function pesquisarColecionaveis(colecionavel) {
    return listUsers.some(jogador => jogador.colecionaveis.includes(colecionavel));
}

// 5) Mostrar nomes dos jogadores que têm um determinado colecionavel
//mostrarJogadores('badge 3');
function mostrarJogadores(colecionavel) {
    const jogadoresComColecionavel = listUsers
        .filter(jogador => jogador.colecionaveis.includes(colecionavel))
        .map(jogador => jogador.nome);

    if (jogadoresComColecionavel.length > 0) {
        alert(`Jogadores com '${colecionavel}':\n${jogadoresComColecionavel.join("\n")}`);
    } else {
        alert(`Nenhum jogador possui o colecionável '${colecionavel}'.`);
    }
}

// 6) Cria um leaderboard e apreta-o numa janela de alerta
//listaTabClass()
function listaTabClass() {
    const ranking = listUsers
        .sort((a, b) => b.pontos - a.pontos) // Ordena do maior para o menor
        .map(jogador => `${jogador.pontos} ${jogador.nome}`)
        .join("\n");

    alert(`Tabela de Classificação:\n ${ranking}`);
}

// 7) Incrementa 100 pontos a todos os jogadores que pertencem a determinado nível
//console.log(listUsers);
//listUsers = giveReward(2)
//console.log(listUsers);

function giveReward(nivel) {
    return listUsers.map(jogador => 
        jogador.nivel === nivel 
            ? { ...jogador, pontos: jogador.pontos + 100 } 
            : jogador
    );
    
}

// 8) somar todos os pontos de todos os jogadores
sumPontos()
function sumPontos() {
    const totalPontos = listUsers
        .reduce((soma, jogador) => soma + jogador.pontos, 0);
    console.log(`Total de pontos de todos os jogadores: ${totalPontos}`);
}
    