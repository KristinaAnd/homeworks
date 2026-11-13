const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);
window.addEventListener('resize', checkReveal);