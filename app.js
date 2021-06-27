let random = Math.random();
if (random < 0.5) {
  console.log("Your Number is Less than 0.5");
  console.log(random);
}

if (random > 0.5) {
  console.log("Your Number is greater than 0.5");
  console.log(random);
}

function isEven(num) {
  if (num % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is odd");
  }
}
isEven(7);
