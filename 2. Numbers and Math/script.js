Math.round(2.2); //2
Math.round(2.8); //3

console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.1)); //5

function cToF(temp) {
  return temp * 1.8 + 32;
}

console.log(cToF(25));
console.log(cToF(-5));

function fToC(temp2) {
  return ((temp2 - 32) * 5) / 9;
}

console.log(fToC(86));
