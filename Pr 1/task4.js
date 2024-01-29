// var abc = isNaN(‘11’);

// var bcd = isNaN(2-10);

// var cde = isNaN(10);

// var money = 500;

// console.log(money)

// For number values, isNaN() tests if the number is the value NaN. When the argument to the isNaN() function is not of type Number, the value is first coerced to a number, and the resulting value is then compared against NaN.

// This behavior of isNaN() for non-numeric arguments can be confusing! For example, an empty string is coerced to 0, while a boolean is coerced to 0 or 1; both values are intuitively "not numbers", but they don't evaluate to NaN, so isNaN() returns false. Therefore, isNaN() answers neither the question "is the input the floating point NaN value" nor the question "is the input not a number".


var num = isNaN(10) ;

console.log(num)



