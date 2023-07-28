/**
 *
 */
// console.log("start");

// var waitSec = 5 * 1000;

// setTimeout(function cb() {
//   console.log("Callback");
// }, waitSec);

// console.log("end");

// // million loc

// var startDate = new Date().getTime();
// var holdSec = 10 * 1000;

// while (new Date().getTime() < startDate + holdSec) {
//   //
// }

// console.log("while expires");
/**
 *
 */
console.log("start");

function cb() {
  console.log("callback");
}

setTimeout(cb,-1);

console.log("end");
