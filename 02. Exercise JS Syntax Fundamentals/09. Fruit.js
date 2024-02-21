function solve(fruit, weight, pricePerKg) {
    let money = weight * pricePerKg;

    console.log(`I need ${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}