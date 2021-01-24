# mini-clothes-shop
* HTML, CSS, JS (Implementing a static filter that works within html)
* Sample database : data/data.json

### 1. Result

![Capture](https://user-images.githubusercontent.com/50979090/105626622-89cd4000-5e95-11eb-95e2-72564c13c9a0.PNG)


### 2. Filtering function version1
>> Network traffic occurs

![image](https://user-images.githubusercontent.com/50979090/105626688-41625200-5e96-11eb-89e6-7f0fe82fd7e3.png)

```
//  Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter(item => item[key] == value));
  // updateItems(key, value)
}
```


### 3. Filtering function version2
>> Reduced network traffic

![image](https://user-images.githubusercontent.com/50979090/105626717-7a9ac200-5e96-11eb-8c6c-27efd5742a0b.png)

```
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
```
