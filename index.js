function add(number1, number2) {
    return number1 + number2;
};

add(2, 3);

function subtract(number1, number2) {
    return number1 - number2;
};

subtract(2, 3);

function multiply(number1, number2) {
    return number1 * number2;
};

multiply(2, 3);

function divide(number1, number2) {
    return number1 / number2;
};

divide(2, 3);

function increment(n) {
     n++;
     return n;
}
increment(122);

function decrement(n) {
    n--;
    return n;
}
decrement(122);

function makeInt(n) {
   return parseInt(n, 10);

}

makeInt("13");

function preserveDecimal(n) {
    return parseFloat(n);
}

preserveDecimal("13.33");