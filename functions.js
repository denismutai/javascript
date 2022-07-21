// Javascript functions
const myArray=['I', 'love', 'chocolate', 'frogs'];
const madeAString=myArray.join(' ');
console.log(madeAString)
const myNum=Math.random();
console.log(myNum);


//Default parameters in JS
function hello(name="Chris"){

document.getElementById("functions").innerHTML=`Hello ${name}`

}
hello('Denis');//Hello Denis- Function uses provided parameter.
hello ();// Hello Chris- Function uses default parameter since it has not been provided.

//anonymous functions
const textBox=document.querySelector("#textBox");
const output=document.querySelector("#output");
textBox
function logKey(event){
    console.log(`You pressed"${event.key}".`);

}
textBox.addEventListener('keydown',logKey);

  //In the case above, the function "logKey" expects to receive another function as its parameter. In this case, the function parameter which in this case is anonymous is the function parameter. Therefore, the function logKey will only execute as expected after it receives the function parameter. the function parameter in this case is therefore the function addEventListener() which normally expects you to pass two parameters through it. The first parameter is normally the name of the event it needs to listen to and a function to run when the event runs. Therefore, this function can be declared anonymously without giving it a name since it is expecting anpother functions as its second parameter.


  //Instead of defining a separate logKey() function, you can pass an anonymous function into an addEventListener();
  textBox.addEventListener('keydown', function(event) {

    console.log(`You pressed "${event.key}".`);
  });