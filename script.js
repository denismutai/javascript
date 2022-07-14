//JavaScript Numbers
let x=5;
let y=50;
z= x+y;
document.getElementById("demo").innerHTML=z;
 
const firstName= "Denis";
const greeting=`Hello, ${firstName}`;
document.getElementById("hello").innerHTML=greeting;

const button= document.querySelector('button');
function greet(){
    const name=prompt("What is your name?");
    document.getElementById("denis").innerHTML=`Hello ${name}, it is so nice to see you working on JavaScript`;
}
button.addEventListener('click', greet);