"use strict";

const str = 'String';
str[2] = 't';

console.log(str.length); //указывает длинну строки
console.log(str[2]);

const fruit = 'Some fruit';

console.log(fruit.indexOf("fruit")); //с какого места начинается или действительно ли есть такое в искомой стоке

const log = 'Hello world';

console.log(log.slice(6, 11)); // cut some part of string
console.log(log.slice(6)); // cut some part of string = до конца строки

console.log(log.substring(6, 11)); 

console.log(log.substr(6, 5)); //с какой позиции сколько символов

//
//числа
////

const num = 12.2;
console.log(Math.round(num)); // lо ближайшего целого

const test = '12.2px';
console.log(parseInt(test)); // Int 
console.log(parseFloat(test)); // Float






