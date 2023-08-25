let animal = {
  type: "wild",
  name: "Lion",
};

function printAnimalDetail(whoAreYou, std) {
  console.log(
    `${whoAreYou} of standard ${std} want to know about a ${this.type} animal known as ${this.name}`
  );
}

Function.prototype.myCall = function (ctx = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a callable");
  }
  ctx.fn = this;
  ctx.fn(...args);
};

Function.prototype.myApply = function (ctx = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Invalid Arguments");
  }
  ctx.fn = this;
  ctx.fn(...args);
};

Function.prototype.myBind = function (ctx = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as  it is not a callable");
  }
  ctx.fn = this;
  return function (...newArgs) {
    return ctx.fn(...args, ...newArgs);
  };
};

printAnimalDetail.myCall(animal, "Alen", 2);
// printAnimalDetail.myApply(animal, 2);
printAnimalDetail.myApply(animal, ["Ben", 3]);
printAnimalDetail.myBind(animal, "Max", 4)();
var returnFn = printAnimalDetail.myBind(animal);
returnFn("Sam", 5);
