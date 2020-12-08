const carouselSlide = ducument.querySelector('.carousel-slide');
const carouselImages = ducument.querySelectorAll('.carousel-slide img');
// Button
const prevBtn = ducument.querySelector('#prevBtn');
const nextBtn = ducument.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';

// button listeners
nextBtn.addEventListener('click', () => {

    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX(' + (-size * counter)+ 'px)';
});

prevBtn.addEventListener('click', () => {

    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX(' + (-size * counter)+ 'px)';
});