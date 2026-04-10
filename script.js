// Funcionalidade de botões selecionados
const botoesSecoes = document.querySelectorAll('.secoes nav li input');

botoesSecoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Remove a classe de todos os botões
        botoesSecoes.forEach(b => b.classList.remove('selecionado'));
        // Adiciona a classe no botão clicado
        this.classList.add('selecionado');
    });
});

// Seleciona o primeiro botão por padrão
if (botoesSecoes.length > 0) {
    botoesSecoes[0].classList.add('selecionado');
}

// Funcionalidade do Modal de Produtos
const modal = document.getElementById('modalProduto');
const botoesConferir = document.querySelectorAll('.papeis input[value="conferir"]');
const botaoFechar = document.querySelector('.modal-fechar');

botoesConferir.forEach(botao => {
    botao.addEventListener('click', function() {
        // Pega o elemento pai (div.papeis)
        const papeis = this.closest('.papeis');
        
        // Extrai as informações do produto
        const img = papeis.querySelector('img').src;
        const titulo = papeis.querySelector('h3').textContent;
        const infoAdicional = papeis.querySelector('.info-adicional').textContent;
        
        // Preenche o modal com as informações
        document.getElementById('modalImg').src = img;
        document.getElementById('modalTitulo').textContent = titulo;
        document.getElementById('modalDescricao').textContent = infoAdicional;
        
        // Abre o modal
        modal.classList.add('ativo');
    });
});

// Fecha o modal ao clicar no botão X
botaoFechar.addEventListener('click', function() {
    modal.classList.remove('ativo');
});

// Fecha o modal ao clicar fora dele
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('ativo');
    }
});

// Fecha o modal ao pressionar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.classList.remove('ativo');
    }
});

// Scroll suave para o catálogo
document.querySelector('a[href="#catalogo"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});

// Scroll suave para o catálogo via botão "Ver Catálogo"
document.querySelector('.cartao button').addEventListener('click', function(e) {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});