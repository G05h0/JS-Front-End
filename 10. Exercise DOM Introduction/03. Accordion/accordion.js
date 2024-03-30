function toggle() {
    const extra = document.getElementById('extra');
    const button = document.getElementsByClassName("button");

    const currentButtonText = button.TextContent;
    if (currentButtonText === 'More') {
        button.TextContent = 'Less';
        extra.style.display = 'block';
    } else {
        button.TextContent = 'More';
        extra.style.display = 'none';
    }
}