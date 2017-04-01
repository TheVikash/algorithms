let a = 5;
let b = 4;
let c = 3;
let d = 2;
let e = 1;

let sum = a + b + c + d + e;

let min = Math.min(Math.min(Math.min(a,b),Math.min(c,d)),e);
let max = Math.max(Math.max(Math.max(a,b),Math.max(c,d)),e);

console.log(sum-max, sum - min);
