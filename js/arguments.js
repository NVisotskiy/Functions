function countArgs() {
  alert("Кількість переданих аргументів: " + arguments.length);
}

countArgs("аргумент 1", 2, {name: "Картман"}, ["один", "два", "три"]);
