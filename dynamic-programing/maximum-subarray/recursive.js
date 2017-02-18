
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
    for(let i = 0; i <= n; i++){
        let q = arr[i];
        let sum = arr[i];
        for(let j = i-1; j >= 0 ; j--){
            sum += arr[j];
            q = Math.max(q,sum);
        }
        r[i] = q;
        if(i == 0)
            max = r[0];
        else
            max = Math.max(r[i], max); 
    }
    //console.log(r);
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

//this solution is of O(n^2) complexity which is not acceptable.