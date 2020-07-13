const R = require("ramda");
const list = [1, 2, 3, 4, 5, 6];

const transducer2 = R.compose(
  // addOnemap
  R.map(
    R.add(1)
  ),
  R.map(
    R.multiply(2)
  ),
  R.filter(
    R.flip(R.gt)(10))
);

console.log(R.transduce(transducer2, R.flip(R.append), [], list));
