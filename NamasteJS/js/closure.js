// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// ------------------------

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// z();

// --------------------------

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();

// z();

// ------------------------------

// function z() {
//   var b = 100;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// --------------------------------

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste JS");
// }

// x();
// --->6,6,6,6,6

// --------------------------------

// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste JS")
// }

// x();
// --->1,2,3,4,5

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
  console.log("Namaste JS");
}

x();
// -------------------------
