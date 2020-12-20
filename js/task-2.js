const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createItem = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
};
const mapped = ingredients.map(ingredient => createItem(ingredient));
const listRef = document.querySelector('#ingredients');
listRef.append(...mapped);
