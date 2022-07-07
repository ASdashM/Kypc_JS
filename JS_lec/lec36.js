"use strict";

const solder = {
    health: 400,
    armor: 100,
    sayHello() {
        console.log("Hello");
    }
};

const john = {
    health:100
};

Object.setPrototypeOf(john, solder);

john.sayHello();

//Или более сокращенно

const johnson = Object.create(solder);

johnson.sayHello();
