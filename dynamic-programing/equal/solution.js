const input = require('./input');

let input1 = `1
4
2 2 3 7`;

processData(input1);

function processData(input) {
   input = input.split('\n');
   let test = parseInt(input.splice(0,1));
   for(let i = 0; i < test ; i++){
       let count = parseInt(input.splice(0,1)[0]);
       let items = input.splice(0,1)[0].split(' ').map(Number);
       let output = operation(items,count);
   }
} 

function operation(a,n){
    let r = [];
    r.push(0);
    for(let i = 1; i < n; i++){
        r.push(Math.abs(a[i] - a[i-1]));
    }
    console.log(r);

}

