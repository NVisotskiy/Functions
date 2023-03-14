function convertDigitsToNumber() {
  const digit1 = parseInt(prompt("Введіть першу цифру:"));
  const digit2 = parseInt(prompt("Введіть другу цифру:"));
  const digit3 = parseInt(prompt("Введіть третбю цифру:"));

  const number = digit1 * 100 + digit2 * 10 + digit3;

  alert(`Результат: ${number}`);
}

console.log(convertDigitsToNumber())