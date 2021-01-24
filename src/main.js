// Fetch the items from JSON file
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}
// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('')
}
// Create HTML list item from the given data item
function createHTMLString(item) {
  return `  
  <li class="item" data-type=${item.type} data-color=${item.color}>
        <img src="${item.image}" alt="${item.type}" class="item__thumnail">
        <span class="item__description">  ${item.gender}, ${item.size}</span>
      </li>
  `
}

//  Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (key == null || value == null) {
    return;
  }
  // displayItems(items.filter(item => item[key] == value));
  updateItems(key, value)
}

// Make the items matching {key:value} invisible
function updateItems(key, value) {
  const allItems = document.querySelectorAll('.item');
  allItems.forEach(item => {
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}

// Filter HTML list item from selected option
function setEventListners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.btns');
  logo.addEventListener('click', () => displayItems(items))
  buttons.addEventListener('click', (event) => onButtonClick(event, items))
}


// main
loadItems().then(items => {
  displayItems(items);
  setEventListners(items)
}).catch(console.log)