const form = document.querySelector('.form-adicionar');
const input = document.querySelector('.input');
const lista = document.querySelector('.lista-itens');
const alerta = document.querySelector('.footer');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // evita que a página recarregu

    const valor = input.value.trim(); // tira espaços em branco

    if (valor === '') return; // evita adicionar vazio

    adicionarItem(capitalizarPrimeiraLetra(valor)); // capitaliza a primeira letra e adiciona o item
    input.value = ''; // limpa o campo após adicionar
});

function capitalizarPrimeiraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function adicionarItem(texto) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    novoItem.innerHTML = `
    <label class="checkbox-container">
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <span class="texto">${texto}</span>
    <button class="botao-remover"><img src="src/lixeira.svg" alt="Botão Remover"></button>
  `;

    lista.appendChild(novoItem);
}

lista.addEventListener('click', function (e) {
    const botaoRemover = e.target.closest('.botao-remover');
    if (!botaoRemover) return;

    const item = botaoRemover.closest('.item');
    item.remove();               // 🔥 remove visualmente o item

    mostrarAlerta();            // 🚨 exibe o alerta temporário
});

function mostrarAlerta() {
    alerta.style.display = 'flex';
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 1000); // ⏱️ esconde após 100 milissegundos
}