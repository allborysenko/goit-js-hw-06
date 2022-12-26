
const fontRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

fontRef.addEventListener('input', event => {
  textRef.style.fontSize = fontRef.value + 'px';

});
