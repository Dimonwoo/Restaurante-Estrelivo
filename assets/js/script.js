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

    pontos.forEach((ponto, indice) => {
        ponto.addEventListener('click', () => {
            indiceAtual = indice;
            alterarFundoCabecalho();
            atualizarPontoAtivo();
        });
    });

    alterarFundoCabecalho();
    atualizarPontoAtivo();

    setInterval(proximaImagem, 4000);
}

iniciarCarrossel();

//!Não se esqueça de implementar uma funcionalidade de rolagem com dedo na tela