let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function updateActiveItem() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        dots[index].classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
            dots[index].classList.add('active');
        }
    });

    // Update transform to create a 3D effect
    items.forEach((item, index) => {
        const offset = (index - currentIndex + items.length) % items.length;
        item.style.transform = `rotateY(${offset * 45}deg) scale(${1 - offset * 0.25})`;
        item.style.opacity = `${1 - offset * 0.25}`;
    });
}

function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    updateActiveItem();
}

function showPrevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateActiveItem();
}

function currentSlide(index) {
    currentIndex = index;
    updateActiveItem();
}

document.querySelector('.next').addEventListener('click', showNextItem);
document.querySelector('.prev').addEventListener('click', showPrevItem);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index));
});

setInterval(showNextItem, 5000);

$(document).ready(function () {
    $('.faq-item').on('click', function () {
        var answerText = $(this).find('.faq-answer').data('answer');
        $(this).find('.faq-answer').text(answerText).slideToggle();
    });
});

