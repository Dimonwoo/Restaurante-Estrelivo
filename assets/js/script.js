function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
}

const images = ['assets/styles/img/king-burguer.png', 'assets/styles/img/cheese-burguer.png', 'assets/styles/img/american-burguer.png'];
let currentImageIndex = 0;
const header = document.querySelector('.carousel-header');
const dots = document.querySelectorAll('.dot');

function changeHeaderBackground() {
    header.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function updateActiveDot() {
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeHeaderBackground();
    updateActiveDot();
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImageIndex = index;
        changeHeaderBackground();
        updateActiveDot();
    });
});

changeHeaderBackground();
updateActiveDot();

setInterval(nextImage, 6000);
