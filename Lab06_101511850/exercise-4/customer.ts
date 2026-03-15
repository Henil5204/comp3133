// Exercise 4 - Modules: customer.ts

export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;

    constructor(first: string, last: string, age: number) {
        this.firstName = first;
        this.lastName = last;
        this._age = age;
    }

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }

    GetAge(): void {
        console.log(`Age: ${this._age}`);
    }
}
