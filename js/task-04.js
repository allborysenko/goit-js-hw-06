let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

increment.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})


