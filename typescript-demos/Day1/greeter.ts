"use strict";

interface Person {
    firstName: string;

    lastName: string;
}

class Student {

    fullName: string = "";

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let user = new Student("Shiva", "Sai");

// document.body.innerText = greeter(user);

let htmlElement;
htmlElement = document.getElementById("contentFromTsFile") as HTMLDivElement;
htmlElement.innerText = greeter(user);