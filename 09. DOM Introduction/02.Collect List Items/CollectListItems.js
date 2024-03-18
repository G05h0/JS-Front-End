function extractText() {
    const itemsElement = document.getElementById('items');
    const textAreaElemtent = document.getElementById('result');

    textAreaElemtent.value = itemsElement.textContent;
}