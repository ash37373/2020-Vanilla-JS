// 첫사용은 const로 진짜 써야할때 let 쓰자
// 여러줄 주석은 쉬프트 알트 에이
//변수 데이터 타입

/*String
const what = "yujin";
*/

/* Boolean
const wat = true; */

/* Number
const  wat = 666; */

/* Float
const wat = 55.1 */

// Array
/* const something = "Something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something];
console.log(daysOfWeek); */

//Object 와 Array다른점은 Object에는 값에 이름을 줄수 있음
/* const hwanInfo = {
  name: "hwan",
  age: 35,
  gender: "Male",
  isHansome: true,
  favMovies: ["Along the gods", "Titanic", "Ninza"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Hamberger", fatty: false },
  ],
};
console.log(hwanInfo);
console.log(hwanInfo.name);
hwanInfo.age = 38;
console.log(hwanInfo.age);
console.log(hwanInfo.favFood);
console.log(hwanInfo.favFood[1]);
console.log(hwanInfo.favFood[1].name); */

//first Function

/* function sayHello(one, two) {
  console.log("hi", one, "nice to meet you", "i'm", two, "years old.");
}
sayHello("hwan", 35); */

/* function sayHello(name, age) {
  console.log(`hi ${name}. my age is ${age} old years`);
}
const greetYujin = sayHello("yujin", 24);
console.log(greetYujin);  //undefined */

/* function sayHello(name, age) {
  return `hi ${name}. my age is ${age} old years`;
}
const greetYujin = sayHello("yujin", 24);
console.log(greetYujin); */

/* const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiplication: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a) {
    return a * a;
  },
  pow: function (a, b) {
    return a ** b;
  },
};

//onsole.log(calculator.plus(4, 4));
const one = calculator.plus(4, 4);
console.log(one);
const two = calculator.minus(5, 2);
console.log(two);
const three = calculator.multiplication(3, 3);
console.log(three);
const four = calculator.divide(4, 2);
console.log(four);
const five = calculator.square(7);
console.log(five);
const six = calculator.pow(10, 2);
console.log(six); */

// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "hi";
title.style.color = "pink";
console.dir(title);
console.dir(document);
document.title = "Everything";
