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

const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    cases.forEach((el, index) => {
        if (el.classList.contains('rotator__case_active')) {
            currentIndex = index;
        }
    });

    setInterval(() => {
        cases[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length;

        cases[currentIndex].classList.add('rotator__case_active');
    }, 1000);
});
