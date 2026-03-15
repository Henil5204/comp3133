"use strict";
// Exercise 4 - Modules: customer.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this._age = age;
    }
    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
    GetAge() {
        console.log(`Age: ${this._age}`);
    }
}
exports.Customer = Customer;
