// //  function is block of code which is used to do some task

// function sum(name = "novem"){ // parameter
//     //logic
//     //  function definition

//     console.log('hello ', name)
// }

// sum('aviansh') // argument

// // 

// // console.log(typeof(78))


// addition(5,5)
//hoisting //tdz

// function addition(a,b,c=10){
//     console.log(a+b+c)
// }


// expressinal function

// const additonOfTwoNum = function sum(a,b){
//     return a+b
//     console.log('hii')
// }

// console.log(additonOfTwoNum(3,5))


// diff bt return and console


/*

let number = 19
number*number

**
25**0.5 == 5

number**.5 

*/


// checkyourgrade(99) //output A++
// printTable(12) //output 12 X 1 = 12


// arrow function
// es6

// const sum = a => a * a

// console.log(sum(5))


// checkNumnberIsEvenOrnot(56) //

// iife : imidiate invoked fucntial exprsiton

// ((name)=>{
//     console.log('hello', name)
// })("avinash");

// ((name)=>{
//     console.log('hello', name)
// })("avinash");




/* 
arr = [1,2,4,2,6,4,2,6,8,9,5,2,4,6]

getHighestValue(arr)
create a function gives highst value from the array

getTotalOfTheArray(arr) 

getTotal(4,6,4,2,22,3,4) // spread operator // sum of array 


*/



// functions == method (stays in object)

//  there are two types of fn
//  high order and low oder

function sayHello( name,CBfunctin){
    console.log(name)
    CBfunctin()
}
// higher order function 

function greet(){
    console.log('hello')
    
}

sayHello('avinash',greet)
