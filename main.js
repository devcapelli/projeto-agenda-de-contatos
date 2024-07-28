const form = document.getElementById('form-agenda')
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    const inputNomeContatos = document.getElementById('nome-contatos');
    const inputTelefoneContatos = document.getElementById('telefone-contatos');

    let linha = '<tr>';
    linha += `<td>${inputNomeContatos.value}</td>`;
    linha += `<td>${inputTelefoneContatos.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContatos.value = '';
    inputTelefoneContatos.value = '';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}