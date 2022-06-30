"use strict";

const options = {
    name: 'nas',
    width: 1212,
    height: 2121,
    colors: {
        border: "black",
        bg: "red"

    },

};

console.log(Object.keys(options)); // Метод keys ппредставляет свойстваа объекта в виде массива + length 
                                   // пересчет объекта (первый способ)

//Деструктуризация

const {border, bg} = options.colors;

// delete options.name;  //Удаление свойства

//Перебор свойств в объекте

let counter = 0; //Для пересчета объекта (второй способ)
for (let key in options) {
    if (typeof(options.key) === 'object'){
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key]}`); // Первый способ раскрытмя объекта
        }
    }
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
}

