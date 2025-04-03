let jogos = JSON.parse(localStorage.getItem("jogos")) || []


let ordemAscendente = true;


// Obter referências DOM
const form = document.getElementById('gameForm');
const tabela = document.querySelector('#tabelaJogos tbody');
const filtroGenero = document.getElementById('filtroGenero');
const filtroPlataforma = document.getElementById('filtroPlataforma');
const ordenarBtn = document.getElementById('ordenarBtn');


filtroGenero.addEventListener('input', renderizarTabela);
filtroPlataforma.addEventListener('change', renderizarTabela);

renderizarTabela()

// Submeter novo jogo
form.addEventListener('submit', event => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const ano = +document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;
    const avaliacao = +document.getElementById('avaliacao').value;

    const plataformas = [...document.getElementById('plataforma').selectedOptions]
        .map(option => option.value);

    const anoAtual = new Date().getFullYear()

    if (ano < 0 || ano > anoAtual) {
        alert('Por favor, preencha o ano corretamente.');
        return;
    }

    const novoJogo = { nome, ano, genero, plataformas, avaliacao };

    jogos.push(novoJogo);

    console.log(jogos);

    // guardar LocalStorage
    guardarLocalStorage()
    // renderizar tabela
    renderizarTabela()
    form.reset();
});

function guardarLocalStorage() {
    localStorage.setItem('jogos', JSON.stringify(jogos));
}

// Renderizar tabela
function renderizarTabela() {
    tabela.innerHTML = '';

    let jogosFiltrados = jogos.filter(j => {
        const generoOK = !filtroGenero.value || j.genero.toLowerCase().includes(filtroGenero.value.toLowerCase());
        const plataformaOK = !filtroPlataforma.value || j.plataformas.includes(filtroPlataforma.value);
        return generoOK && plataformaOK;
    });

    if (!ordemAscendente) {
        jogosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
    } else {
        jogosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    jogosFiltrados.forEach((jogo, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${jogo.nome}</td>
        <td>${jogo.ano}</td>
        <td>${jogo.genero}</td>
        <td>
          <button onclick="verDetalhes(${index})">Ver detalhes</button>
          <button onclick="editarJogo(${index})">Editar</button>
          <button onclick="removerJogo(${index})">Remover</button>
        </td>
      `;

        tabela.appendChild(tr);
    });
}

// Ver detalhes do jogo
function verDetalhes(index) {
    const jogo = jogos[index];
    alert(
        `Nome: ${jogo.nome}\nAno: ${jogo.ano}\nGénero: ${jogo.genero}\nPlataformas: ${jogo.plataformas.join(', ')}\nAvaliação: ${jogo.avaliacao}`);
}

// Remover jogo
function removerJogo(index) {
    if (confirm('Deseja remover este jogo?')) {
        jogos.splice(index, 1);
        renderizarTabela();
        guardarLocalStorage()
    }
}

// Editar jogo
function editarJogo(index) {
    const jogo = jogos[index];
    document.getElementById('nome').value = jogo.nome;
    document.getElementById('ano').value = jogo.ano;
    document.getElementById('genero').value = jogo.genero;
    document.getElementById('avaliacao').value = jogo.avaliacao;

    const selectPlataforma = document.getElementById('plataforma');
    Array.from(selectPlataforma.options).forEach(opt => {
        opt.selected = jogo.plataformas.includes(opt.value);
    });

    jogos.splice(index, 1);
    renderizarTabela();
    guardarLocalStorage()
}


// Ordenar jogos
ordenarBtn.addEventListener('click', () => {
    ordemAscendente = !ordemAscendente;
    ordenarBtn.textContent = ordemAscendente ? 'Ordenar Z-A' : 'Ordenar A-Z';
    renderizarTabela();
});
