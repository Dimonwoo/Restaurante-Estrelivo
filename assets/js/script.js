function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
}

function iniciarCarrossel() {
    const imagens = ['assets/styles/img/king-burguer.png', 'assets/styles/img/cheese-burguer.png', 'assets/styles/img/american-burguer.png'];
    let indiceAtual = 0;
    const cabecalho = document.querySelector('.carousel-header');
    const pontos = document.querySelectorAll('.dot');
    let touchStartX = 0;
    let touchEndX = 0;

    function alterarFundoCabecalho() {
        cabecalho.style.backgroundImage = `url(${imagens[indiceAtual]})`;
    }

    function atualizarPontoAtivo() {
        pontos.forEach((ponto, indice) => {
            if (indice === indiceAtual) {
                ponto.classList.add('active');
            } else {
                ponto.classList.remove('active');
            }
        });
    }

    function proximaImagem() {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        alterarFundoCabecalho();
        atualizarPontoAtivo();
    }

    function swipeStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function swipeEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    }

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            proximaImagem();
        }
    }

    pontos.forEach((ponto, indice) => {
        ponto.addEventListener('click', () => {
            indiceAtual = indice;
            alterarFundoCabecalho();
            atualizarPontoAtivo();
        });
    });

    cabecalho.addEventListener('touchstart', swipeStart);
    cabecalho.addEventListener('touchend', swipeEnd);

    alterarFundoCabecalho();
    atualizarPontoAtivo();

    setInterval(proximaImagem, 4000);
}

iniciarCarrossel();

function animaçãoRisco() {
    const risco = document.querySelector("#sobre-nos > div.titulo > div")
    setTimeout(function () {
        risco.style.display = 'block'
    }, 500)
}
animaçãoRisco()

document.addEventListener("DOMContentLoaded", function() {
    const chefes = document.querySelectorAll(".chefes");

    function showChefes() {
        chefes.forEach(chefe => {
            if (isElementInViewport(chefe)) {
                chefe.classList.add("show");
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener("scroll", showChefes);
    showChefes();
});
