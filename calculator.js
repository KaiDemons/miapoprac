//Функция сложения чисел
function add(a, b) {
    return a + b;
}

//Фнукция вычитания
function subtract(a, b) {
    return a - b;
}
// Функция умножения
function multiply(a, b) {
    return a * b;
}
//Функция деления
function divide(a, b) {
    if (b === 0) return 'Error: Division by zero';
    return a / b;
}

module.exports = { add, subtract, multiply, divide };