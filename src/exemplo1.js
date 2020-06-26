import { compose } from "ramda";
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
