// with iteration
const fibs = (n) => {
  const ret = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      ret.push(i);
    } else {
      ret.push(+ret.slice(-2, -1) + +ret.slice(-1));
    }
  }
  return ret;
};

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// with recursion
const fibRec = (n) => {
  return typeof n !== "number"
    ? "no number"
    : 0 >= n
    ? "illegal number"
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibRec(n - 1), fibRec(n - 1)[n - 3] + fibRec(n - 1)[n - 2]];
};

console.log(fibRec(7)); // [0, 1, 1, 2, 3, 5, 8]
