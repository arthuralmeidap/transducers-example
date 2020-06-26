const R = require("ramda");
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = (n) => n * 2;
const addOne = (n) => n + 1;
const isBiggerThanTen = (n) => n > 10;
const sum = (acc, value) => acc + value;
const sumList = list
  .map(addOne)
  .map(double)
  .filter(isBiggerThanTen)
  .reduce(sum, 0);

console.log(sumList);

const addOneAndDouble = R.compose(double, addOne);

const sumListComposta = list
  .map(addOneAndDouble)
  .filter(isBiggerThanTen)
  .reduce(sum, 0);

console.log(sumListComposta);

const addOneAndDoubleAndIsBiggerThan = R.compose(
  isBiggerThanTen,
  double,
  addOne
);

console.log(list.map(addOneAndDoubleAndIsBiggerThan).reduce(sum, 0));

const result1 = isBiggerThanTen(double(addOne(1)));
const result2 = isBiggerThanTen(double(addOne(5)));

console.log({ result1, result2 });
