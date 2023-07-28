console.log(x);
var x = 1;
a();
b();
c();
var y = 10;
console.log(x);
console.log(a);
console.log(d);

function a() {
    var abc = 10;
    console.log("a fun", abc);
}

function b() {
    console.log("b fun", bcd);
    var bcd = 10;
}

function c() {
    console.log("c fun---> y: ", y);
}

var d = function () {
    console.timeLog("d fun");
};
