alert(
  "1. Функція-вираз: " + (function() { return "Hello, world!"; })() + "\n" +
  "2. Функція-конструктор: " + (new Function("a", "b", "return a + b;"))(2, 3) + "\n" +
  "3. Метод об'єкта: " + ({
    name: "John",
    greet: function() {
      return "Hello, my name is " + this.name + ".";
    }
  }).greet() + "\n" +
  "4. Стрілкова функція: " + ((a, b) => a + b)(2, 3) + "\n" +
  "5. Функціональний вираз: " + (function multiply(a, b) { return a * b; })(2, 3) + "\n" +
  "6. Названа функція: " + divide(10, 5) + "\n" +
  "7. Анонімна функція: " + (function(a, b) { return a - b; })(10, 5)
);

// Названа функція
function divide(a, b) {
  return a / b;
}
