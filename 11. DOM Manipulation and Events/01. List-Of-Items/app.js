function addItem() {
    const inputElement = document.getElementById('newItemText');
    const newItemList = document.getElementById('items');

    const newItemElement = document.createElement('li');

    newItemElement.textContent = inputElement.value;

    newItemList.appendChild(newItemElement);

    inputElement.value = '';
}