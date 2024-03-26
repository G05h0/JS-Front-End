function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const tableRowElements = document.querySelector('table#customers tbody tr');

    const trElement = Array
        .from(tableRowElements)
        .find(element => element.children[1].textContent.includes(inputEmailElement));

    if (trElement) {
        trElement.remove();
        
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }



    inputEmailElement.value = '';
}