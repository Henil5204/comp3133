// Exercise 1 - ES6 TypeScript version
// Uses: let, arrow function (lambda), template literals, two name parameters

let greeter = (first: string, last: string): string => {
    return `Hello, ${first} ${last}!`;
};

let firstName: string = "Jane";
let lastName: string = "User";

console.log(greeter(firstName, lastName));
