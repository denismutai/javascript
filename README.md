# javascript
This repository is for practicing JavaScript Foundations
## JavaScript Variables
* Businessess and companies uses various data which may be of interest to web developers. Examples of data in a commerce company include customer name or customers online shopping cat
* To use the data in the web or software development process, they must be stored
* __Variables__ are named storage or containers used to store data
### Creating or declaring variables 
* Variables can be declared using three methods in JS
1. ### __const__: 
Has two use cases:
* Declaring variables that are known prior to development and which one is absolutely sure a need to reassign them may not arise eg const yearOfBirth=1999; //in this case it is a sure thing that the year of birth won't change at any point and thus there will be no need to reassign it
* It is also used to declare variables that are hardcoded and and therefore not any chance that they will be reassigned. The justification for this use case is that it helps with values that may be difficult to remember in real time. In this case, the variables are declared using uppercase e.g 
    const RED= #07745FG
2. ### __let__:
__let__ is used to declare variables that can be changed at any point
    let currentYear = 2022;
* Variables can be declared and not assigned a value
Example 
    let age;
* Variables can also be reassigned to be given another value
Example 
    age =currentYear-yearOfBirth;
3. ### __var__:
__var__ is no longer used as it is a potential source of many errors- the __var__ keyword does not support block-level block- it supports only global and functional scope. As a result, when declared in a block level, such as in a __loop__ or an __if__ statement, it can still be accessed outside the block, get reassigned and cause errors. __var__ like __let__ share many similarities including the ability to reassign another value to the variable.
# JavaScript numbers
## Arithmetic operators
* (+) addition
* (-) subtraction
* (/) division
* (*) multiplication
* (**) exponentiation operator raises the first operand to the power of the second operant e.g 5 ** 2= 25
* (%) modulus operator is also known as the remainder operator- It provides the remainder that occurs when the first operand is divided by the second operand.
* (=)  assignment operatorm is used to assign values to variables
* (--) decrementing operator is used to decrement a number e.g. 4-- = 3 
* (++) incrementing operator is used to increment number e.g. 5++ = 6

## OPerator precedence in JavaScript
it describes the order in which operations are performed in JavaScript basing on the power of the operators used. The operator with the highest precedence is the first one to be implemented. However, the impact of operator precedence can be overwritten using brackets.

## Javscript strings and string methods
## JavaScript Conditionals
## Javascript loops
*   for loop- Loops through a block of code a number of times
            for (statement 1; statement 2; statement 3) {
                // code block to be executed
            }
    * Statement 1 is executed before the execution of the code block
    * Statement 2 defines the condition for executing the code block
    * Statement 3 is executed everytime after the code block has been executed

* while loop- loops through a block of code while a specified condition is true
* for/in-loops through the properties of an object.
                for (key in object) {
                    // code block to be executed
                }


# Functions in Javascript
* Functions allows us to strore a piece of code that does a single task repeatedly inside a defined block and then call that block whenever you need the task done using short phrases instead of writing the lines of code all over again.
## Built-in functions
* JavaScript has many built-in functions that allow us to do useful things without having to write the code ourselves.
* Common builtin functions in JS
1. String manipulation e.g replace ()
2. Array manipulation eg join ()
3. Generating random numbers e.g. random()
4. Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — () — and you're not using a common built-in language structure like a for loop, while or do...while loop, or if...else statement, you are making use of a function.
## Functions vs Methods
Functions that are part of an object are called methods
## Invoking Functions
A function has to be runned or invoked after it has been defined in order for it to be utilized
## Function Paramters
These are values that need to be specified while invoking a video. Some functions require parameters to be specified when being invoked in order for them to function. Example of a built-in function that requires parameters is the replace(Text to be replaced, text to replace).
* Parameters are sometimes referred to as arguments, properties or attributes
### Optional parameters
Sometimes parameters are optional and thus don't need to be specified. The function, when passed with no parameters adapts a given default behaviour. Example of such function with optional parameters is the array method join() whose default behaviour is to use comas as the basis of joining values in an array.
### Default parameters- functions.js line 12-20
If there is need to support a default parameter, the same can be added by using the assignment operator after the name of the parameter followed by the intented default value. In cases where the argument is not provided, the function utilizes the parameter that has been supported as optional.
### Anonymous Functions and arrow functions
We can also create a function that has no name
* Anonymous functions are often used when the function expects to receive another functions as a parameter. In this case the function parameter is mostly passed as an anonymous function.
#### Anonymous function example functions.js line 20--
An example is when you want to run certain code when the browser listens to the user perform an event such as typing into a given textbox. To achieve this, you have to call [addEventListener()]function of the text box. The function will expect you to pass at least two parameters:
* the name of the event to listen to (for text boxes it is known as the __keydown__ )
* a function to run when the event happens
When the user presses a key, the browser will call the provided function and pass it a parameter containing information about this event, including the particular key that the browser pressed.

