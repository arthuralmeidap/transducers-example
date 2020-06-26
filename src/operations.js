module.exports = {
  double: (n) => n * 2,
  addOne: (n) => n + 1,
  isBiggerThanTen: (n) => n > 10,
  sum: (acc, value) => acc + value,
  combinator: (acc, value) => acc.concat(value),
  mapReducer: (map) => (combinator) => (acc, value) =>
    combinator(acc, map(value)),
  filterReducer: (predicate) => (combinator) => (acc, value) =>
    predicate(value) ? combinator(acc, value) : acc,
};
