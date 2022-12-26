function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeColorBnt = document.querySelector('.change-color');
const spanBackgroundColor = document.querySelector('.color');

changeColorBnt.addEventListener('click', (event) => {
  let randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  spanBackgroundColor.textContent = randomColor;
  
}) 