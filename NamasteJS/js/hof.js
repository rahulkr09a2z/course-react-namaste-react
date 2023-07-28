/**
 * Higher Order Function
 */

function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}

/**
 * Example1 - DRY
 */

const radius = [3, 1, 2, 4];

// WHAT not to do

// const calculateArea = function (radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// const calculateCircumference = function (radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// const calculateDiameter = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//       output.push(2 *  radius[i]);
//     }
//     return output;
//   };

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));

// What is right - modular coding

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.map(area));

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

/**
 * PROTOTYPE
 */

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log("prototype", radius.calculate(area));
