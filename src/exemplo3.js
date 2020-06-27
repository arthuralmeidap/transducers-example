const {
  double,
  isBiggerThanTen,
  addOne,
  combinator,
  sum,
  mapReducer,
  filterReducer,
} = require("./operations");
const { compose } = require("ramda");

const doubleIntermediateReducer = mapReducer(double);
const addOneIntermediateReducer = mapReducer(addOne);
const isBiggerIntermediateReducer = filterReducer(isBiggerThanTen);

// para termos uma função reducer para ser usada ainda precisamos aplicar o combinator
const doubleReducer = doubleIntermediateReducer(combinator);
const addOneReducer = addOneIntermediateReducer(combinator);
const isBiggerReducer = isBiggerIntermediateReducer(combinator);

const addOneAndDoubleReducer = compose(
  addOneIntermediateReducer,
  doubleIntermediateReducer,
  isBiggerIntermediateReducer
)(combinator);

const list = [1, 2, 3, 4, 5, 6];

const total = list.reduce(addOneAndDoubleReducer, []).reduce(sum, 0);

console.log(list.reduce(addOneAndDoubleReducer, []));
console.log(total);
