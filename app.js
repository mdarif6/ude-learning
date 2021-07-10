//1- for if
// let random = Math.random();
// if (random < 0.5) {
//   console.log("Your Number is Less than 0.5");
// }

// if (random > 0.5) {
//   console.log("Your Number is greater than 0.5");
//   console.log(random);
// }
// else {
//   console.log("Your Number is greater than or equal to 0.5");
// }
// console.log(random);

//2. for Even/ODD

// function isEven(num) {
//   if (num % 2 == 0) {
//     console.log("Number is Even");
//   } else {
//     console.log("Number is odd");
//   }
// }
// isEven(7);

// 3.for more if else

// const dayOfWeek = prompt("Enter a Day").toLocaleLowerCase();
// if (dayOfWeek === "monday") {
//   console.log("The Working day");
// } else if (dayOfWeek === "friday") {
//   console.log("This is good after work");
// } else if (dayOfWeek === "sunday") {
//   console.log("Great! Sunday");
// } else {
//   console.log("You choose wrong day");
// }

//4- for many if else

// const age = 77;
// if (age < 5) {
//   console.log("You are under 5!, so your entry if free");
// } else if (age < 10) {
//   console.log("You are a child!, so you will pay $10");
// } else if (age < 65) {
//   console.log("You are adult!, so pay $20");
// } else {
//   console.log("You are Senior!, so pay only $10");
// }

// function getColor(phrase) {
//   if (phrase === "stop") {
//     console.log("red");
//   } else if (phrase === "slow") {
//     console.log("yellow");
//   } else if (phrase === "go") {
//     console.log("green");
//   } else {
//     console.log("purple");
//   }
// }
// getColor("fdf");

//5- Nested- individually here

// const password = prompt("Enter a new password");

// if (password.length >= 6) {
//   console.log("Enough length of password");
// } else {
//   console.log("Password must contain 6+ characters! ");
// }

// //Have to ask
// if (password.indexOf(" ") === -1) {
//   console.log(" Good, there is no space");
// } else {
//   console.log("Passowrd can not contain space");
// }

//5A- Nested again

// const password = prompt("Enter a new password");

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password");
//   } else {
//     console.log("Passowrd can not contain space");
//   }
// } else {
//   console.log("Password is too short and it must contain 6+ characters! ");
// }

//6-Excercise
// const num = 102;

// if (num <= 100) {
//   if (num > 50) {
//     console.log("HEY!");
//   }
// } else {
//   if (num < 103) {
//     if (num % 2 === 0) {
//       console.log("YOU GOT ME!");
//     }
//   }
// }

//7-TRUTHY AND FALSY
// const userInput = prompt("Enter Something");

// if (userInput) {
//   console.log("TRUTHY");
// } else {
//   console.log("FALSY");
// }

// if (" ") {
//   console.log("TRUTHY");
// } else {
//   console.log("FALSY");
// }

//8-Logical Operators

// const password = prompt("Enter a new password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log(" yey this is valid password");
// } else {
//   console.log(" Incorrect Password- Meet the complexity");
// }

//9- Ude excercse for and operator

// const mystery = "Password7";

// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
//   console.log("YOU GOT IT!!!");
// }

//10- OR Operator

// const age = 4;

// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("Free Entry");
// } else if (age >= 5 && age < 10) {
//   console.log("Pay$10");
// } else if (age >= 10 && age < 65) {
//   console.log("Pay $20");
// } else {
//   console.log("Invalid Age Enterd");
// }

//11- Not Operator

// let firstName = prompt("Enter your first Name");

// if (!firstName) {
//   firstName = prompt("Keep Trying");
// }

// const age = 44;

// if (!((age >= 0 && age < 5) || age >= 65)) {
//   console.log("You are not free ");
// }

//      JAVASCRIPT ARRAYS

//ask- string vs array to change particular and entire element

// const airplaneSeats = [["Ruth", "Anthony", "Sevie"], ["Amelia","Pedro","Maya"], ["Xavier","Ananya","Luis"], ["Luke",null,"Deniz"], ["Rin","Sakura","Francisco"]]

// airplaneSeats
// [Array(3), Array(3), Array(3), Array(3), Array(3)]0: (3) ["Ruth", "Anthony", "Sevie"]0: "Ruth"1: "Anthony"2: "Sevie"length: 3__proto__: Array(0)1: (3) ["Amelia", "Pedro", "Maya"]0: "Amelia"1: "Pedro"2: "Maya"length: 3__proto__: Array(0)2: (3) ["Xavier", "Ananya", "Luis"]3: (3) ["Luke", null, "Deniz"]4: (3) ["Rin", "Sakura", "Francisco"]0: "Rin"1: "Sakura"2: "Francisco"length: 3__proto__: Array(0)length: 5__proto__: Array(0)
// airplaneSeats[3][1]="Hugo"
// "Hugo"
// airplaneSeats
// (5) [Array(3), Array(3), Array(3), Array(3), Array(3)]

//Nested Loops1

// let str = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log(`Outer Loop: ${i}`);
//   for (let j = 0; j < str.length; j++) {
//     console.log(`Inner:`, str[j]);
//   }
// }

//Nested Loops2

// for (let i = 0; i < 5; i++) {
//   console.log(`i- outer loop: ${i}`);

//   for (j = 1; j <= 3; j++) {
//     console.log(`            j-inner loop: ${j}`);
//   }
// }

//Nested Loops 3- for Arrays

// const seat = [
//   ["This", "is", "Arif"],
//   ["Who", "are", "you"],
//   ["okay", "got", "it"],
// ];

// console.log(seat);
// for (let i = 0; i < seat.length; i++) {
//   const row = seat[i];
//   console.log(`ROW #${i}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// While loop

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// While loop eg for secret code

// const SECRET = "network";

// let guess = prompt("Enter the secret code");

// while (guess !== SECRET) {
//   guess = prompt("Enter the secret code");
// }
// console.log("Congrats you found secret code");

//Break the Loop

// let input = prompt("Hi, say something");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "Stop to copying me") break;
// }
// console.log("Okay you won");

//Break eg

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

//Guessing Game

// let maximum = parseInt(prompt("Enter the maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter the Valid Number only"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let attempt = 1;

// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess"));
// while (guess != targetNum) {
//   attempt++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Too High!, Enter a new guess"));
//   } else {
//     guess = parseInt(prompt("Too Low!!, Enter a new guess"));
//   }
// }

// console.log(`Yey, you got it and you took ${attempt} guesses`);

// let userInput = prompt("Enter a number");
// while (!parseInt(userInput)) {
//   userInput = prompt("Enter a valid number");
// }

// const targetNum = Math.floor(Math.random() * parseInt(userInput));
// console.log(targetNum);

// let guess = prompt("Enter your guess");
// let attempt = 1;

// while (parseInt(guess) != targetNum) {
//   if (guess === "q") break;
//   console.log(guess);
//   attempt++;

//   if (parseInt(guess) > targetNum) {
//     guess = prompt("Too high");
//   } else if (parseInt(guess) < targetNum) {
//     guess = prompt("Too Low");
//   } else {
//     guess = prompt("Please enter a valid number");
//   }
// }
// if (guess === "q") {
//   console.log("Okay, you quit");
// } else {
//   console.log("congrats you win");
//   console.log(`Correct Number and you took ${attempt} guesses`);
// }

//For..OF Loop example

// const seat = ["This", "is", "Arif", "Who", "are", "you", "okay", "got", "it"];

// for (let name of seat) {
//   console.log(name);
// }

// For Of loop for example

// const seat = [
//   ["This", "is", "Arif"],
//   ["Who", "are", "you"],
//   ["okay", "got", "it"],
// ];
// for (let row of seat) {
//   for (let name of row) {
//     console.log(name);
//   }
// }

// Iterating Over Objects

// const testScore = {
//   Md: 80,
//   Arif: 90,
//   Khan: 93,
// };

/** 
 * // for (let person in testScore) {
//   console.log(`${person} : ${testScore[person]}`);
// }

// Object.entries(testScore);
// console.log(testScore);
 * 
*/

// let total = 0;
// let scores = Object.values(testScore);
// for (let score of scores) {
//   console.log(score);
//   total += score;
// }
// console.log(total / scores.length);

//TO DO LIST APP

// let userInput = prompt("Hello!, Let me know what would you like to do");
// const todos = ["Buy Burger", "Buy Chicken"];
// while (userInput !== "quit" && userInput !== "q") {
//   if (userInput === "list") {
//     console.log("**********************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i} : ${todos[i]}`);
//     }

//     console.log("**********************");
//   } else if (userInput === "new") {
//     const newTodo = prompt("Okay!!, what is the new want todo?");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list!!!`);
//   } else if (userInput === "delete") {
//     const index = parseInt(
//       prompt("Okay, please enter an index to delete that")
//     );
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Okay, deleted ${deleted[0]}`); //why taken zero Index
//     } else {
//       console.log("Unknow index, please try with valid index");
//     }
//   }
//   userInput = prompt("Hello!, Let me know what would you like to do");
// }
// console.log("Okay then !! you are quiting this App");

//FUNCTION//
// function singSong() {
//   console.log("Hello sing first song");
//   console.log("Hello sing second song");
//   console.log("Hello sing third song");
//   console.log("Hello sing fourth song");
// }

// singSong();
// singSong();
// singSong();

//FUNCTION WITH ARGUMENT

// function greet(firstName) {
//   console.log(`Hello ! ${firstName}, how are you?`);
// }

// greet("Arif");

// RANT Exercise

// function rant(message) {
//   for (let i = 1; i <= 3; i++)
//   console.log(message.toUpperCase());
// }

// rant("i hate beets Arif");

//FUNCTION WITH MULTIPLE ARGUMENT

// function greet(firstName, lastName) {
//   console.log(`Hey! ${firstName}`);
// }

// greet("Arif");

// FUNCTION SCOPE

// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet Macaw";

// function birdWatch() {
//   // let bird = "Great Blue Heron";
//   console.log(bird);
// }
// birdWatch();

// function lastElememt(arr) {
//   if (arr.length !== 0) {
//     return arr[arr.length - 1];
//   } else {
//     return null;
//   }
// }

// lastElememt([3, 5, 7]);
// lastElememt([1]);
// lastElememt([]);

// function square(x) {
//   if (x != 0) {
//     console.log(x ** 2);
//   }
//   console.log("Mani");
// }

// square();
// square();

// input =>processing => output
//                         call/invoke argument

// CAPITALIZE FIRST LETTER

// function capitalize(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       result = result + str[i].toUpperCase();
//     } else {
//       result = result + str[i];
//     }
//   }
//   console.log(result);
// }

// capitalize("hello");

//SUM ARRAY EXERCISE

// function sumArray(arrNum) {
//   let sum = 0;
//   for (let i = 0; i < arrNum.length; i++) {
//     sum = sum + arrNum[i];
//   }
//   return sum;
// }

// console.log(sumArray([2, 4, 5]));

// function returnDay(num) {
//   if (num < 0 || num > 7) {
//     return null;
//   } else {
//     if (num === 1) {
//       return "Monday";
//     } else if (num === 2) {
//       return "Tuesday";
//     } else if (num === 3) {
//       return "Wednesday";
//     } else if (num === 4) {
//       return "Thursday";
//     } else if (num === 5) {
//       return "Friday";
//     } else if (num === 6) {
//       return "Saturday";
//     } else if (num === 7) {
//       return "Sunday";
//     }
//   }
// }
// console.log(returnDay(-1));
// console.log(returnDay(1));
// console.log(returnDay(2));
// console.log(returnDay(3));
// console.log(returnDay(4));
// console.log(returnDay(5));
// console.log(returnDay(6));
// console.log(returnDay(7));
// console.log(returnDay(8));

// function returnDay(number) {
//   if (number < 1 || number > 7) {
//     return null;
//   }
//   let dayData = { 1: "Monday", 2: "Tuesday", 3: "Wednesday" };
//   return dayData[number];
// }

// console.log(returnDay(2));
// console.log(returnDay(2));

// let animal = "Lion";

// function animal1() {
//   let animal = "Elephent";
//   console.log(animal);
// }
// animal1();
// console.log(animal);

// for (var i = 0; i < 5; i++) {
//   var msg = "Hello Md arif";
// }
// console.log(msg);
// console.log(i);

//LEXICAL SCOPE

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

//RETURNING FUNCTIONS

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Congratulation Mr Md Arif");
//       console.log("You have completed it");
//     };
//   } else {
//     return function () {
//       alert("A Virus attacked");
//       alert("Stop trying again and again");
//       alert("Stop trying again and again");
//       alert("Stop trying again and again");
//       alert("Stop trying again and again");
//       alert("Stop trying again and again");
//       alert("Stop trying again and again");
//       alert("Stop trying again and again");
//     };
//   }
// }

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//   return num >= 1 && num <= 10;
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const myMath = {
//   PI: 3.14,
//   square: function (num) {
//     return num * num;
//   },

//   cube: function (num) {
//     return num ** 3;
//   },
// };

// const myMath = {
//   PI: 3.14,
//   square(num) {
//     return num * num;
//   },

//   cube (num) {
//     return num ** 3;
//   },
// };

// const square = {
//   area(side) {
//     return side * side;
//   },

//   perimeter(side) {
//     return side * 4;
//   },
// };

// THIS KEY WORD
// const cat = {
//   name: "Blue Stele",
//   color: "grey",
//   breed: "scottish",
//   meow() {
//     // console.log("mewwwwwwwww");
//     console.log("thisisss", this);
//     console.log(`${this.breed}, say mewwwwwwwwwwwwww`);
//   },
// };

// const meow2 = cat.meow;

// const hen = {
//   name: "Helen",
//   eggCount: 0,

//   layAnEgg() {
//     eggCount++;
//     return "EGG";
//   },
// };

//TRY CATCH

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("Error");
// }
// console.log("After Error");

// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch (e) {
//     console.log("Please Pass a string");
//   }
// }

// FOR EACH

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function print(element) {
//   console.log(element);
// }
// print(numbers[0]);
// print(numbers[1]);
// numbers.forEach(print);

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// for (let el of numbers) {
//   console.log(el);
// }

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "DDLJ",
//     score: 99,
//   },
//   {
//     title: "Billu",
//     score: 89,
//   },
//   {
//     title: "KKKPK",
//     score: 90,
//   },
//   {
//     title: "Alien",
//     score: 95,
//   },
// ];
// movies.forEach(function (movie) {
//   console.log(`${movie.title}- ${movie.score}/100`);
// });

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "DDLJ",
//     score: 99,
//   },
//   {
//     title: "Billu",
//     score: 89,
//   },
//   {
//     title: "KKKPK",
//     score: 90,
//   },
//   {
//     title: "Alien",
//     score: 95,
//   },
// ];

// const titles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// const fullNames = [
//   { first: "Albus", last: "Dumbledore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];

// const firstName = fullNames.map(function (f) {
//   return f.first;
// });

//  ARROW FUNCTION

// const add = function (x, y) {
//   return x + y;
// };

// const add = (x, y) => {
//   return x + y;
// };

// const square = (x) => {
//   return x * x;
// };

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const greet = (str) => {
//   return `Hey ${str}!`;
// };

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "DDLJ",
    score: 99,
  },
  {
    title: "Billu",
    score: 89,
  },
  {
    title: "KKKPK",
    score: 90,
  },
  {
    title: "Alien",
    score: 95,
  },
];

// const titles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

const titles = movies.map((movie) => movie.title.toUpperCase());
