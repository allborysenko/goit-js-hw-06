const nameInput = document.querySelector('#name-input');
const nameOnput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event)=> {
    nameOnput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
    nameOnput.textContent = "Anonymous";
}})

