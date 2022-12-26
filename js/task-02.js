const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("ul");

ingredients.forEach(ingredient => {
const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  liRef.classList.add("item");
  ingredientsRef.appendChild(liRef);
})


