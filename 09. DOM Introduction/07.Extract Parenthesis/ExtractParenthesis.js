function extract(content) {
    const contentElement = document.getElementById(content);

    const mathces = contentElement.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);

    const text = Array
        .from(mathces)
        .map(match => match[1])
        .join('; ');

    return text;
}