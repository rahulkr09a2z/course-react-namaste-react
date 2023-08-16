var arr = [2, 1, 3, 5, 8, 4];
var nestedArr = [1, [2, 3], [4, 5, [6, 7]], [8, 9]];

Array.prototype.myMap = function (callback) {
  var arr = this;
  var mappedArray = [];
  if (!arr) return undefined;
  for (i = 0; i < arr.length; i++) {
    var mappedValue = callback.call(arr[i], i, arr);
    mappedArray.push(mappedValue);
  }
  return mappedArray;
};

Array.prototype.myFilter = function (callback) {
  var arr = this;
  var mappedArray = [];
  if (!arr) return undefined;
  for (i = 0; i < arr.length; i++) {
    if (callback.call(arr[i], i, arr)) {
      mappedArray.push(arr[i]);
    }
  }
  return mappedArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  var arr = this;
  var acc = initialValue;
  if (!arr) return undefined;
  for (i = 0; i < arr.length; i++) {
    if (acc !== undefined) {
      acc = callback.call(undefined, acc, arr[i], i, arr);
    } else {
      acc = this[i];
    }
  }

  return acc;
};

Array.prototype.myFlatten = function (depth = "Infinity") {
  var arr = this;
  var newArr = [];

  if (depth === "Infinity") depth = null;
  function depthDecr(depth) {
    if (depth === null) {
      return null;
    }
    return depth - 1;
  }

  function flattenMethod(arr, depth) {
    depth = depthDecr(depth);
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item) && (depth > 0 || depth === null))
        flattenMethod(item, depth);
      else newArr.push(item);
    }
  }
  flattenMethod(arr, depth);
  return newArr;
};

console.log(
  "myMap double",
  arr.myMap((x) => x * 2)
);

console.log(
  "myFilter even",
  arr.myFilter((x) => x % 2 === 0)
);

console.log(
  "myReduce max",
  arr.myReduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0)
);

console.log("myFlattern flatArr", nestedArr.myFlatten());
