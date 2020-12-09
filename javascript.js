const carouselSlides = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
// Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlides.style.transform = 'translateX(' + (-size * counter)+ 'px)';

// button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length-1) return;  //to avoid bugs, cause it may load slower
    carouselSlides.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlides.style.transform='translateX(' + (-size * counter)+ 'px)';
});

prevBtn.addEventListener('click', () => {
if (counter<= 0) return; //to avoid bugs, cause it may load slower
    carouselSlides.style.transition ="transform 0.4s ease-in-out";
    counter--;
    carouselSlides.style.transform = 'translateX(' + (-size * counter)+ 'px)';
});

carouselSlides.addEventListener('transitioned', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlides.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlides.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});
