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

const strConcat = (a, b) => a + " - " + b;

const doubleIntermediateReducer = mapReducer(double);
const addOneIntermediateReducer = mapReducer(addOne);
const isBiggerIntermediateReducer = filterReducer(isBiggerThanTen);

// para termos uma função reducer para ser usada ainda precisamos aplicar o combinator
const doubleReducer = doubleIntermediateReducer(combinator);
const addOneReducer = addOneIntermediateReducer(combinator);
const isBiggerReducer = isBiggerIntermediateReducer(combinator);

const transducer = compose(
  addOneIntermediateReducer,
  doubleIntermediateReducer,
  isBiggerIntermediateReducer
);

const addOneAndDoubleReducer = transducer(combinator);

const sumReducer = transducer(sum);

const list = [1, 2, 3, 4, 5, 6];

const total = list.reduce(addOneAndDoubleReducer, []).reduce(sum, 0);

console.log(list.reduce(sumReducer, 0));
console.log(total);
console.log(list.reduce(transducer(strConcat), ""));
