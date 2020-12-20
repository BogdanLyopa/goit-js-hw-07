const items = [...document.querySelectorAll('li.item')];
console.log(`В списке ${items.length} категории.`);
const mapped = items
  .map(item => {
    const title = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('ul li').length;
    return {
      title,
      count,
    };
  })
  .forEach(item => {
    console.log(
      `Категория: ${item.title}\r\nКоличество элементов: ${item.count}`,
    );
  });
