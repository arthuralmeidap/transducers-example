const { compose } = require("ramda");

const {
  double,
  isBiggerThanTen,
  addOne,
  combinator,
  mapReducer,
  filterReducer,
} = require("./operations");

const doubleReducer = mapReducer(double);
const addOneReducer = mapReducer(addOne);

const addOneAndDouble = compose(doubleReducer, addOneReducer);

console.log(addOneAndDouble(1));
