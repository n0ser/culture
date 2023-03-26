const cardsButtons = document.querySelectorAll('.cards__button')
const frame = document.querySelectorAll('.frame')
const cards = document.querySelectorAll('.cards__container')

cardsButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        cards[index].classList.toggle('visible')
        console.log(cards[index].classList.contains('visible'))
        item.innerHTML = cards[index].classList.contains('visible') ? 'Скрыть' : 'Показать больше'
    })
})

// Получаем ссылки на элементы
const popup = document.querySelector('.popup')
const closePopupBtn = document.querySelector('.close')

const buttons = document.querySelectorAll('.order-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = "block";
    });
})

closePopupBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

