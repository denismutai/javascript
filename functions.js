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

  //In the case above the anonymous function that has been passed into the event listener is "function (event)", which in this case is anonymous. This function has successfully removed the need to define another function logKey. 

// Arrow Functions
textBox.addEventListener('keydown', (event)=>{

    console.log(`You pressed "${event.key}".`);
});
//In the case above the the anonymous function has been written in arrow form therefore managing to escape the hassle of defining a separate logKey function and also doing without the need to mention the word "function while defining it"

//if the function has one line in the curly brackets, you omit the curly brackets:
textBox.addEventListener('keydown', (event)=>
console.log(`You pressed on the "${event.key}".`));
//If the function also has only 1 parameter, you can omit the brackets around the parameter
textBox.addEventListener('keydown' ,event=>
console.log(`You pressed "${event.key}".`));



const helloMessage="I love JavaScript and markdown and I am a passionate web development student and a technical writer from Kenya./n My objective is to connect to all the amazing developers on tech twitter. I am on a journey towards fullstack development and will be partcipating in #100DaysOfCodeChallenge."


function greeting(){
console.log("Hello tech twitter")
document.querySelector("#introduction_message").textContent=helloMessage;
}

greeting();