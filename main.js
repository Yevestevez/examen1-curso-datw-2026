const main = () => {
    const ratingComponent = document.querySelector('.rating-form');
    const thanksComponent = document.querySelector('.thanks-message');
    const form = document.querySelector('.rating-form form');

    ratingComponent.addEventListener('submit', (event) => {
        event.preventDefault();

        const ratingValue = new FormData(form).get('rating');
        const ratingSelection = document.querySelector('.rating-selection');
        ratingSelection.textContent = ratingValue;
        ratingComponent.setAttribute('hidden', 'true');
        thanksComponent.removeAttribute('hidden');
    });
};

main();
