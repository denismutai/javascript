//JavaScript Numbers
// let x=5;
// let y=50;
// z= x+y;
// document.getElementById("demo").innerHTML=z;
 
// const firstName= "Denis";
// const greeting=`Hello, ${firstName}`;
// document.getElementById("hello").innerHTML=greeting;

// const button= document.querySelector('button');
// function greet(){
//     const name=prompt("What is your name?");
//     document.getElementById("denis").innerHTML=`Hello ${name}, it is so nice to see you working on JavaScript`;
// }
// button.addEventListener('click', greet);

// const string="The revolution will not be televised";
// console.log(string);
// const badString= string;
// console.log(badString);

// const firstMessage= 'I\'ve Just come back';
// console.log(`Hello my name is ${firstName} ${firstMessage}`);

// //const helloName=prompt("What is your name");
// //const hello= `Hello ${helloName} and welcome to the world of JS`;
// //console.log(hello);

// console.log(hello + " " + "Concatenate using + operator");

// const numberOne= 123;
// const numberMessage="Concatenating numbers and strings is not a great idea";
// console.log(`${numberOne} ${numberMessage}`)

// const stringNumber= "12345";

let stringOne="asdfghjklmnvbghtyujfd";
document.getElementById("string").innerHTML=stringOne.length;

stringOne="Apple, Banana,Kiwi"
let part=stringOne.slice(7,13);
part= stringOne.substring(7,13);
part= stringOne.substring(-12,6);
part=stringOne.substr(5,8)
document.getElementById("string").innerHTML=part;