document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const carrinhoCount = document.getElementById("carrinho-count");
    const carrinhoItens = document.getElementById("carrinho-itens");
    const carrinhoTotal = document.getElementById("carrinho-total");
    
    let total = 0;
    let itemCount = 0;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Obrigado por entrar em contato, " + form.nome.value + "!");
        form.reset();
    });

    // Função para adicionar itens ao carrinho
    const addToCart = (nome, preco) => {
        itemCount++;
        total += parseFloat(preco);
        carrinhoCount.textContent = itemCount;
        
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${nome} - R$ ${preco}`;
        carrinhoItens.appendChild(itemDiv);

        carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    };

    // Eventos para botões de adicionar ao carrinho
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const nome = this.getAttribute("data-nome");
            const preco = this.getAttribute("data-preco");
            addToCart(nome, preco);
        });
    });

    // Função para rolagem suave
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('data-nome');
        const preco = parseFloat(button.getAttribute('data-preco'));
        addToCart(nome, preco);
    });
});

function addToCart(nome, preco) {
    cart.push({ nome, preco });
    total += preco;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // Limpa a lista atual

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartList.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // Limpa a lista atual

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.preco;
    });

    document.getElementById('total').textContent = total.toFixed(2);
    
    document.getElementById('finalizar').addEventListener('click', () => {
        alert('Compra finalizada! Obrigado por comprar conosco.');
        localStorage.removeItem('cart'); // Limpa o carrinho após finalizar
        cartList.innerHTML = ''; // Limpa a lista atual
        document.getElementById('total').textContent = '0.00';
    });
});
const menu = document.querySelector('.menu');

setInterval(() => {
    menu.classList.toggle('move'); // Alterna a classe para aplicar o efeito
}, 1000); // Muda a cada 1 segundo
document.getElementById('search').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        if (nomeProduto.includes(query)) {
            produto.style.display = 'block'; // Exibe o produto
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });
});

