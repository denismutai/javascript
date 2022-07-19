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
