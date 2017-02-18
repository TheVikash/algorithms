
function processData(input){
    input = input.split('\n');
    let testcase = parseInt(input.shift());
    for(let i = 0; i < testcase; i++ ){
        let arrCount = parseInt(input.shift());
        let arrInput = input.shift().split(' ').map(Number);
        let conti = contiguous(arrInput, arrCount -1);
        let nonconti = nonContiguous(arrInput, arrCount -1);
        console.log(conti, nonconti);
    }
}

function contiguous(arr,n){
    let r = [];
    let max = -1;
    for(let i = 0; i <= n; i++){
        r.push(-1);
    }
    r[0] = arr[0];
    max = arr[0];
    for(let i = 1; i <= n; i++){
        r[i] = Math.max(arr[i], arr[i] + r[i-1]);
        max = Math.max(r[i], max);
    }
    return max;
}

function nonContiguous(arr,n){
    let sum = 0;
    let max = -Infinity;
    for(let i = 0; i <= n; i++){
        if(arr[i]> 0){
            sum += arr[i];
        }else{
            max = Math.max(max,arr[i])
        }
    }
    if(sum == 0){
        sum = max;
    }
    return sum;
}

let input = `6
1
1
6
-1 -2 -3 -4 -5 -6
2
1 -2
3
1 2 3
1
-10
6
1 -1 -1 -1 -1 5`;

//output
// 1 1
// -1 -1
// 1 1
// 6 6
// -10 -10
// 5 6

processData(input);

//this is an awesome problem .
//this solution solving this problem in O(n) complexity.
//this solution used bottom up approach of 
//dynamic programing in which we compute subproblem result, save it and then check it for future result.