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

//Excercise
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
