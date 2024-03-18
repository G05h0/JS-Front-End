function calc() {
    // TODO: sum = num1 + num2
    const firstInputElemetnt = document.getElementById('num1');
    const secondInputElemetnt = document.getElementById('num2');
    const sumInputElement = document.getElementById('sum');

    const firstNumber = Number(firstInputElemetnt.value);
    const ssecondNumber = Number(secondInputElemetnt.value);

    sumInputElement.value = firstNumber + ssecondNumber;
}
