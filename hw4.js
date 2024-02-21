/* 1. What is javascript? How does an interpreted programming language differ from a
compiled language?
    JavaScript is a lightweight programming language commonly used by web developers to add dynamic 
    interactions to web pages, applications, servers, and even games. It is known as the behavior layer, where we
    can change how the page behaves, adding interactivity. 
    A compiled language is expressed in the instructions of the target machine. Which is different from
    an interpreted language because it compiles. An interpreted language is generally interpreted, without compilingm
    the program into machine instructions. It is read and executed by an interpreter.

2. What is the difference between var, let, and const when declaring variables?
    var: old school, global and function scoped, redeclarable
        in order to use it you have to give it a name. can store information/data
    let: block scoped meaning they can only be accessed within the block it is in, redeclarable but not within the same scope
    const: block scoped, not declarable , must be initialized with a value that cannot be changed

3. What are anonymous functions? Higher order functions?
   A function with no name is called an anonymous function, it can be called like any function created with a function 
   declaration. Higher order functions is a function that returns a function or takes other functions as arguments.

4. Define objects in JavaScript and how they are different from objects in more traditional
OOP languages. 
    objects are a non primitive data type and is a collection of properties. they are different from objects in other traditional 
    OOP languages because certain features like property and methods can be resused. It is a collection of named values, and can be declared 
    with the const keyword. Javascript objects also use prototype base inheritance, which is different from other languages.
*/


const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

//this is the result array where all the cats that are available will be added to
const catsToAdopt = [];

//looping through cats array
for (var i =0; i<cats.length; i++)
{
    if(cats[i].adoptionStatus == 'available')
    {
        catsToAdopt.push(cats[i].name);
    }
}

//creating a new sentence via code about newly adopted cats from result array
var newsentence = 'Here are your adopted cats! ';
newsentence += catsToAdopt.join(' ');

console.log(newsentence);

