// Exercise 1 - ES6 TypeScript version
// Uses: let, arrow function (lambda), template literals, two name parameters
var greeter = function (first, last) {
    return "Hello, ".concat(first, " ").concat(last, "!");
};
var firstName = "Jane";
var lastName = "User";
console.log(greeter(firstName, lastName));
