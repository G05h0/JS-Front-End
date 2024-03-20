function toggle() {
    const extraInfoElement = document.getElementById('extra');
    const toggleButtonElement = document.querySelector('.head span.button');

    const currentButtonText = toggleButtonElement.textContent;
    if (currentButtonText === 'More') {
        extraInfoElement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        extraInfoElement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }
}