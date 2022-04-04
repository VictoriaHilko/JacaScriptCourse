"use strict";

let str = "some";
let strobj = new String(str); //так никто не использует!!!

console.log(typeof(str)); //string
console.log(typeof(strobj)); //object


console.dir([1,2,3]); //здесь создаем прототип экземпляра массива


//EXAMPLE
//это объект
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log("Hello!");
    }
};

//создаем определенного солдата
const john = {
    health: 100
};

john.__proto__ = soldier; // установилипрототипом джона солдата. ЭТО УСТАРЕВШЕЕ!
console.log(john);
console.log(john.armor); //благодаря прототипамполучили для джона свойства солдата


//ДЕЙСТВУЮЩИЕ СПОСОБЫ
Object.setPrototypeOf(john, soldier); // если объект уже существует

const john2 = Object.create(soldier); //создаем новый объект джон, который будет прототипно наследоваться от солдата
john2.sayHello();