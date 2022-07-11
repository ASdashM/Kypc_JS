'use strict';

//Дублирование объектов

console.log('Дублирование объектов');

let userInfo = {
    name: "Vas",
    age: 21,
};

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);

console.log('');

//Так же через Object.assign можно добавлять свойства

console.log('Добавление через Object.assign');

Object.assign(userInfo, {city: 'Kharkiv'});

Object.assign(userInfo, {addres: {street: 'lost', home: 4}});

console.log(userInfo);

console.log('');
//Проверка существования свойства

console.log('Проверка существования свойства');

if (userInfo.city) {
    console.log(userInfo.city);
} else {
    console.log('Not find');
}

if (user.city) {
    console.log(user.city);
} else {
    console.log('Not find');
}

console.log('');

//Опциональная цепочка

console.log('Опциональная цепочка');

console.log(userInfo?.addres?.street); //Если существует выводит значение ключа

console.log(user?.addres?.street); // Если не существует выводит indefined

console.log('');

// for in

console.log('For in');

for (let key in userInfo) {
    //Ключи
    console.log(key); //name, age, ...
    //Значения ключей
    console.log(userInfo[key]); // Vas, 21, ...
}

for (let key in userInfo.addres) {
    console.log(key);
    console.log(userInfo.addres[key]);
}

console.log('');

//This

console.log("This");

let hide = {
    name: 'asd',
    age: 23,
    showInfo() {
        console.log(`${this.name}, ${this.age} лет`);
    },
    showArrowInfo() {
        // function show() {console.log(`${this.name}, ${this.age} лет`)}    //Привидет к ошибке, т.к. this обращает к 
                                                                            //родителю,а в show нет таких свойств

        //НО стрелочная функция рабоатет

        let show = () => console.log(`${this.name}, ${this.age} лет`); //Т.к. для них нет своего this
                                                                      //Вложености как будто не существует
    }
};

console.log('');

//Функция-конструктор

function UserInfo(name) {   //Имя функции - конструктора долнжно начинаться с большой буквы (важное условие)
    
    //this = {} Создает пустой объект (неявно)
    this.name = name;
    this.age = 30;
    //return this возвращает объект (неявно)
}

console.log(new UserInfo('Vas'));   //Вызоваться должно при помощи оператора new (важное условие)

console.log('');
