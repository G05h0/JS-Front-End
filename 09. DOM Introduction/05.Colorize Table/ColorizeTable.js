function colorize() {
    
    const evenRowElemtns = document.querySelectorAll('table tr:nth-child(2n)');

    //evenRowElemtns.forEach(element => element.style.backgroundColor = 'teal');

    for (const evenRow of evenRowElemtns) {
        evenRow.style.backgroundColor = 'teal';
    }
}