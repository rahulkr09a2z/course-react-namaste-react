// diffr betn functioin statement from function expression is hoisting
a();
b();
// Function Statement aka function declaration
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called;");
};

// Anonymous Function--->used as a variable
// function(){}

// Named Function Expression
var b = function xyz () {
    console.log(xyz);
  };
  
// Difference between parameters & Arguments ?
// function paramFun (param1,param2){

// }
// paramFun(arg1,arg2)

// First class function(First class citizen)
    //  --->    the ability to use function as a variable or argument ,or can be passed to a function or return from a function  
// arrow functions
/**
 * const caller = () => {...};
 */
