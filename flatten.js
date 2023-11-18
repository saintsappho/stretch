let flat = [];
const flatten = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      flat.push(item);
    }
  } return flat;
};

const array1 = [1, 2, [3, 4], 5, [6]];
const array2 = ["A", [["B", ["C"]], [[["D"]], "E"]]];
const array3 = ["bugs", [["creepy", ["crawylies"]], [[[600]], "of them"]]];
// console.log(flatten(array1));
// console.log(flatten(array2));
// console.log(flatten(array3));

const assertArraysEqual = function(arrayAssert1, arrayAssert2) {
    if (eqArrays(arrayAssert1, arrayAssert2)) {
        console.log(` 🟢🟢🟢 Assertion Passed: ${arrayAssert1} === ${arrayAssert2} 🟢🟢🟢 `);
    }

    if (!eqArrays(arrayAssert1, arrayAssert2)) {
        console.log(` 🟥🟥🟥 Assertion Failed: ${arrayAssert1} !== ${arrayAssert2} 🟥🟥🟥 `);
    }
};
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    } return true;
};

assertArraysEqual(flatten(array1), [1, 2, 3, 4, 5, 6])
flat = [];
assertArraysEqual(flatten(array2), ['A', 'B', 'C', 'D', 'E'])
flat = [];
assertArraysEqual(flatten(array3), ["bugs", "creepy", "crawylies", 600, "of them"])
