function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
}

window.addEventListener('load', () => {
    iniciarCarrossel();
});

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

    function imagemAnterior() {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
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
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance > 0) {
            imagemAnterior();
        } else if (swipeDistance < 0) {
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

    cabecalho.classList.add('initial-transition');

    setTimeout(() => {
        cabecalho.classList.remove('initial-transition');
    }, 100);

    setInterval(proximaImagem, 4000);
}


function animaçãoRisco() {
    const risco = document.querySelector("#sobre-nos > div.titulo > div")
    setTimeout(function () {
        risco.style.display = 'block'
    }, 500)
}
animaçãoRisco()

function exibeGarfo () {
    const garfo = document.querySelector("#sobre-nos > div.imagens-sobre-nos");
    window.innerWidth < 387 ? garfo.style.transform = 'translate(10%, 155px)' : null;
    window.innerWidth <= 368 ? garfo.style.transform = 'translate(5%, 155px)' : null;
    if (window.innerWidth < 360) {
        const div = document.querySelector("#sobre-nos > div.descrição");
        garfo.style.display = 'none';
        div.style.alignSelf = 'center';
        div.style.marginRight = '0';
    }
}
exibeGarfo();

document.addEventListener("DOMContentLoaded", function() {
    const chefes = document.querySelectorAll(".chefes");

    function showChefes() {
        if (window.innerWidth < 294) {
            chefes.forEach(chefe => {
                chefe.style.width = "95%";
            });
        } else {
            chefes.forEach(chefe => {
                chefe.style.width = ""; 
            });
        }

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
    window.addEventListener("resize", showChefes);
    showChefes();
});

