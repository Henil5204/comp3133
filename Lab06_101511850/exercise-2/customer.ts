// Exercise 2 - Types, Classes and Objects

class Customer {
    firstName: string;
    lastName: string;

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Doe";
customer.greeter();
