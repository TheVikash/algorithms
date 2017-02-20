const input = require('./input1');

function processData(input){
    input = input.split('\n');
    count = parseInt(input.shift());
    let data = input.map(Number);
    let output = computeCandies(data,count);
    console.log(output);
}

function computeCandies(a,n){
    let r = [];
    for(let i = 0; i < n ; i++){
        r.push(1);
    }

    for(let i = 1; i < n; i++){
        if(a[i] > a[i-1]){
            r[i] = r[i-1] + 1;
        }
    }

    for(let i = n-2; i >=0; i--){
        if(a[i] > a[i+1]){
            if(r[i] <= r[i+1]){
                r[i] = r[i+1] + 1;
            }
        }
    }

    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += r[i];
    }

    return sum;
}




let input1 = `7
3
2
3
4
4
4
8`;


processData(input); 


//this solution is very trivial dont use extra brain in applying all unneccassry conditions
//this solution is having three steps, make an array of candies given to the student and assign one candy to each
//then traverse from first to last and check if score of curretn student is greater than previous, if yes then assign then give him one candy more than previous one
//then traverse from last to first and check if current student score is greater than next student if yes than check candies of current student is less than next student if yes than give one candy more.