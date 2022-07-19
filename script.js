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

// let stringOne="asdfghjklmnvbghtyujfd";
// document.getElementById("string").innerHTML=stringOne.length;

// stringOne="Apple, Banana,Kiwi"
// let part=stringOne.slice(7,13);
// part= stringOne.substring(7,13);
// part= stringOne.substring(-12,6);
// part=stringOne.substr(5,8)
// document.getElementById("string").innerHTML=part;

// let string="Please visit Mozilla Docs to learn JavaScript";
// let part=string.replace("Mozilla Docs", "My GitHub JavaScript repository");
// document.getElementById("string").innerHTML=part;

// let stringOne="Apples are my favorite fruits. Apples have vitamins"
// let partOne= stringOne.toUpperCase();
// let part=stringOne.concat(' ',partOne);
// document.getElementById("string").innerHTML=part;

// let stringOne="Hello World!";
// length.stringOne;
// let part=stringOne.padStart(4,"x");
// document.getElementById("string").innerHTML=part;

// red=true;
// blue=false;

// if(blue){
//     console.log("This statement is false") 
// }
// else if (red){
// console.log("This statement is true")
// }

// console.log(2>2);
// let result=5>4;
// console.log(result);
// let a=0

// cars=["Crossover", "Convertible", "Sedan","Minivan", "Coupe"]
// let text="";
// for (let i=0; i<cars.length;i++){
// text +=cars[i] + "<br>";
// }
// document.getElementById("cars").innerHTML=text;

var food=["Cheese", "Pie", "Lunch", "Breakfast"];
console.log(typeof(food));
var string="I am really hungry for some";
console.log(`${string} ${food[0]}`);
for (let i=0;i<food,length;i++){
    console.log(`${string} ${food[i]}`)
}