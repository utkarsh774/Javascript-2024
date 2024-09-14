// // 40 class in javascript -> 40 hours -> content ( excluding pratice)
// // 1 hour hands-on everyday
// // 10 th October finish


// // function defination
// function fun(param)
// {
//         console.log("hello",param);
   
// }
 
// // function invokation

// // fun("Vineet");
// // fun([1,2,3,4,5])
// // fun(10)
// // fun() -> gives undefined

// const rVal = fun()
// console.log(rVal);


// functions are first class citizen in Javascript

// let a = 5;
// let b = a;
// console.log(b)


// function expression

// let val = function fun()
// {
//     console.log("hello from val");
// }
//fun()  // not defined
// val() -> hello from val

//anonymous function

// let val2 = function()
// {
//     console.log("hello from val");
// }



// A function can be passed inside another function


// function fun1()
// {
//     console.log("Hello from fun1")
  
// }

// function fun2(param)
// {
//     console.log(param)
//     console.log("hello from fun2");

// }

// fun2(fun1())

// hello from fun1 
// undefined
// hello from fun2

// function fun1()
// {
//         let fun = function()
//         {
//             console.log("I am returned from fun1");
           
//         }
//         return fun
// }

// let rVal = fun1()
// console.log(rVal())






// IIFE -> Immediatedly Invoked function expression

// (function ()
// {
//     console.log("I am a IIFE")
// })fun()


// Arrow function

// let fun = () =>
// {
//     console.log("I am a arrow function")
// }
// fun()

let square = a =>   console.log(a*a)
  
let sum = (a,b) =>
    {
        console.log(a+b)
        return "xyz"
    }
       
    
        console.log(sum(2,4))

//square(4)