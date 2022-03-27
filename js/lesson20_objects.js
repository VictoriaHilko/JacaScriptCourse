"use strict";

//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest(); //запускаем метод из объекта 

//console.log(options.colors);

//delete options.name; //удалить какое-тосвойство объекта
//console.log(options);  

//
let counter = 0; //посчитать сколько всего свойств в объекте
for (let key in options){
    //проверка, что это объект
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Option ${i}, have value ${options[key][i]} `); 
            counter++;
        }
    } else {
        console.log(`Option ${key}, have value ${options[key]} `);
        counter++;
    } 
}
console.log(counter);

//


console.log(Object.keys(options).length);


//деструктуризация
//чтобы не использовать вот такое:
console.log(options["colors"]["border"]);
//делаем так:
const {border, background} = options.colors;
console.log(border);