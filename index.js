// EXAMPLE 1 - Get the Difference between Two Set objects in JavaScript

function getDifference(setA, setB) {
  return new Set(
    [...setA].filter(element => !setB.has(element)),
  );
}

const set1 = new Set(['a', 'b', 'c']);
const set2 = new Set(['a', 'b']);

console.log(getDifference(set1, set2)); // 👉️ {'c'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the complete Difference between Two Set objects

// function getDifference(setA, setB) {
//   return new Set(
//     [...setA].filter(element => !setB.has(element)),
//   );
// }

// const set1 = new Set(['a']);
// const set2 = new Set(['a', 'b', 'c']);

// console.log(getDifference(set1, set2)); // 👉️ {}

// ------------------------------------------------------------------

// // EXAMPLE 3 - Combine the results from two getDifference() calls

// function getDifference(setA, setB) {
//   return new Set(
//     [...setA].filter(element => !setB.has(element)),
//   );
// }

// const set1 = new Set(['a']);
// const set2 = new Set(['a', 'b', 'c']);

// const difference = new Set([
//   ...getDifference(set1, set2),
//   ...getDifference(set2, set1),
// ]);

// console.log(difference); // 👉️ {'b', 'c'}
