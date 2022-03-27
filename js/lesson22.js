"use strict";

let a = 5,
    b = a;

    b = b+5;

console.log(b);
console.log(a);

//result:
//10
//5
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передает именно ссылку на объект obj

copy.a = 10;
console.log(copy);
console.log(obj);

//result:
//{ a: 10, b: 1 }
//{ a: 10, b: 1 }

//делаем в цикле копию изначального объекта
function copyOfObject (mainObject){
    let objCopy = {};

    let key;
    for (key in mainObject){
        objCopy[key] = mainObject[key]; // поэлементно присваиваем значения первого массива его копии
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyOfObject(numbers); //вызывает функцию для изначального объекта, чтобы создать копию

newNumbers.a = 10;
newNumbers.c.x=10;
console.log(newNumbers);
console.log(numbers);

//второй способ копирования
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //объединили два объекта - это независимая поверхносная копия объекта
const fullCopy = Object.assign({}, add);
fullCopy.d = 20;
console.log(add); 
console.log(fullCopy); 



//Copies for massives

const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray; //здесь просто положится ссылка на первый массив
const newArray = oldArray.slice(); //это уже копия без ссылок

newArray[2] ='ololololo';
console.log(oldArray);
console.log(newArray);

//Spread operator - оператор разворота (превращает структуру в набор данных)

const video = ['youtube', 'vimeo','rutybe'],
blogs = ['wordpress','livejournal','blogger'],
internet = [...video, ...blogs, 'facebook'];

console.log(internet);

//
function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

