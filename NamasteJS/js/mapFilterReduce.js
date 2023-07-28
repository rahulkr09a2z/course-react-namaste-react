const arr = [5, 1, 2, 3, 6];

// Double
// Triple
// Binary

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

// const output = arr.map(double);
const output = arr.map(triple);
// const output = arr.map(binary);
console.log(
  "max",
  arr.reduce(function (acc, curr) {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0)
);

const users = [
  { firstName: "Ben", lastName: "Ten", age: 10 },
  { firstName: "Goku", lastName: "Gohan", age: 5 },
  { firstName: "Ash", Ketchum: "Gohan", age: 21 },
  { firstName: "Light", lastName: "yagami", age: 10 },
];

console.log(
  "fullname",
  users.map((user) => user.firstName + " " + user.lastName)
);
console.log(
  "age range",
  users.reduce(function (acc, user) {
    if (acc[user.age]) {
      ++acc[user.age];
    } else {
      acc[user.age] = 1;
    }
    return acc;
  }, {})
);
console.log(
  "firstname age less than 18",
  users.filter((user) => user.age < 18).map((user) => user.firstName)
);
console.log(
  "REDUCE-firstname age less than 18",
  users.reduce(function (acc, user) {
    if (user.age < 18) {
      acc.push(user.firstName);
    }
    return acc;
  }, [])
);
