// INPUT
let person = {
  name: "John",
  contact: {
    city: null,
    phone: "987-654-3210",
    email: "john123@xyz.com",
    address: {
      city: "Berlin",
      country: "Germany",
    },
  },
};

// OUTPUT
// {
//     name:"John",
//     contact_phone: "987-654-3210",
//     contact_email: "john123@xyz.com",
//     contact_address_city: "Berlin",
//     contact_address_country:"Germany"
// }

Object.prototype.myFlatten = function (depth = "INFINITY") {
  console.log(this);
  const obj = this;
  let res = {};
  function flatFun(obj, depth, prevKey = "") {
    for (const [key, value] of Object.entries(obj)) {
      let newKey = `${prevKey}${key}`;
      if (
        typeof value == "object" &&
        value !== null &&
        (depth > 0 || depth === "INFINITY")
      )
        return flatFun(
          value,
          depth === "INFINITY" ? depth : depth - 1,
          `${newKey}_`
        );
      res[newKey] = value;
    }
  }
  flatFun(obj, depth);
  return res;
};

console.log(person.myFlatten(1));
