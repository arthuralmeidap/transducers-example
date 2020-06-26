const { double, isBiggerThanTen, sum, addOne } = require("./operations");

const list = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const combinator = (acc, value) => acc.concat(value);

const mapReducer = (map) => (combinator) => (acc, value) =>
  combinator(acc, map(value));
const filterReducer = (predicate) => (combinator) => (acc, value) =>
  predicate(value) ? combinator(acc, value) : acc;

const doubleReducer = mapReducer(double)(combinator);
const addOneReducer = mapReducer(addOne)(combinator);

const isBiggerThanTenReducer = filterReducer(isBiggerThanTen)(combinator);

console.log(`double using map: ${list.map(double)}`);
console.log(`double using reduce: ${list.reduce(doubleReducer, [])}`);
console.log("\n\n");
console.log(`addOne using map: ${list.map(addOne)}`);
console.log(`addOne using reduce: ${list.reduce(addOneReducer, [])}`);
console.log("\n\n");
console.log(`isBiggerThanTen using filter: ${list.filter(isBiggerThanTen)}`);
console.log(
  `isBiggerThanTen using reduce: ${list.reduce(isBiggerThanTenReducer, [])}`
);
