// console.error('JavaScript Basics');
// console.error('Numbers and Math');
// console.error('Strings');
// console.error('HTML CSS Review');
// console.error('Console.log');
// //alert('Welcome!');
// console.error('Variables');

// let variable1 = 3;
// console.log(variable1);

// let calculation = 2 + 2;
// console.log(calculation);
// console.log(calculation + 2);

// let result = calculation + 2;
// console.log(result);

// let message = 'Hello';
// console.log(message);
// console.log(';');

// variable1 = 5;
// console.log(variable1);

// variable1++;
// console.log(variable1);

// const name = 'Que';
// console.log(`My name is: ${name}`);

// const cost = (500 + 300 * 2 + 900) / 100;
// console.log(`Cost of food: $${cost}`);

// const tax = cost * 0.1;
// console.log(`Tax(10%): $${tax}`);

// const total = cost + tax;
// console.log(`Total cost: $${total}`);

// let cartQuantity = 0;
// const cartQuant = () => console.log(`Cart Quantity: ${cartQuantity}`);

// const addToCart = () => console.log(`Cart Quantity: ${(cartQuantity += 1)}`);
// const add2 = () => console.log(`Cart Quantity: ${(cartQuantity += 2)}`);
// const add3 = () => console.log(`Cart Quantity: ${(cartQuantity += 3)}`);
// const add4 = () => console.log(`Cart Quantity: ${(cartQuantity += 4)}`);
// const add5 = () => console.log(`Cart Quantity: ${(cartQuantity += 5)}`);

// const removeCart = () => console.log(`Cart Quantity: ${(cartQuantity -= 1)}`);

// const reCart = () => (
//   console.log(`Cart was reset.`),
//   console.log(`Cart Quantity: ${(cartQuantity = 0)}`)
// );

// //Calculator
// let calculation = '';

// const one = () => console.log(`Calculator: ${(calculation += '1')}`);
// const two = () => console.log(`Calculator: ${(calculation += '2')}`);
// const three = () => console.log(`Calculator: ${(calculation += '3')}`);
// const four = () => console.log(`Calculator: ${(calculation += '4')}`);
// const five = () => console.log(`Calculator: ${(calculation += '5')}`);
// const six = () => console.log(`Calculator: ${(calculation += '6')}`);
// const seven = () => console.log(`Calculator: ${(calculation += '7')}`);
// const eight = () => console.log(`Calculator: ${(calculation += '8')}`);
// const nine = () => console.log(`Calculator: ${(calculation += '9')}`);
// const zero = () => console.log(`Calculator: ${(calculation += '0')}`);
// const add = () => console.log(`Calculator: ${(calculation += ' + ')}`);

// const equals = () => (
//   (calculation = eval(calculation)), console.log(`Calculator: ${calculation}`)
// );

console.error('Lesson 6 - Booleans & If-Statements');
//Booleans == true || false;
// console.log(3 > 5);
// console.log(3 < 5);
// console.log(5 == '5.00'); //true
// console.log(5 === '5.00'); //false
// console.log(5 !== '5.00'); //true
// console.log(5 != '5.00'); //false

// if (false) {
//   console.log('Hello');
// } else {
//   console.log('Bye');
// }
// const age = 15;
// if (age >= 16) {
//   console.log('You can drive.');
// } else if (age >= 14) {
//   console.log('Almost there.');
// } else {
//   console.log("You can't drive.");
// }

//Rock Paper Scissors

let playerPick = '';
let computerPick = '';
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  computerPick = choices[Math.floor(Math.random() * choices.length)];
};

const compare = () => {
  if (playerPick === computerPick) {
    console.log('Tie.');
  } else if (
    (playerPick === 'rock' && computerPick === 'scissors') ||
    (playerPick === 'paper' && computerPick === 'rock') ||
    (playerPick === 'scissors' && computerPick === 'paper')
  ) {
    console.log('You win.');
  } else {
    console.log('You Lose.');
  }
};

// //Ternary Operator ?:

// const result = true ? 'truthy' : 'falsy'; //truthy
// const result2 = false ? 'truthy' : 'falsy'; //falsy

// console.log(result, result2);

// /*
// if (true){
//   'truthy'
// } else {
//   'falsy'
// }
// */

// // Guard Operator &&

// const message = false && 'hello'; //false
// const message2 = 5 && 'hello'; //hello

// console.log(message);
// console.log(message2);

// //Default Operator ||

// const opera = undefined || 'USD'; //USD
// const opera2 = 'EUR' || 'USD'; //EUR

// console.log(opera);
// console.log(opera2);
