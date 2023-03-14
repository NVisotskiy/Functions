function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareNumbers(5, 10)); // -1
console.log(compareNumbers(10, 5)); // 1
console.log(compareNumbers(5, 5)); // 0
