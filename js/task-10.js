function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector('input');
const createBtntRef = document.querySelector('button[data-create]');
const destroyBtntRef = document.querySelector('button[data-destroy]');
const boxesRef = document.getElementById('boxes');


// createBoxes(amount)
// створити масив, кількість елементів = input.value, перебрати, кожному елементу задати висоту ширину і випадковий колір...
// збільшити на 10 px наступний елемент??? 

destroyBoxes() {
  boxesRef.innerHTML = "";
}

destroyBtntRef.addEventListener('click', () =>{
  destroyBoxes();
})