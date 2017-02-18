function processData(input){
    input = input.split('\n');
    count = parseInt(input.shift());
    let data = input.map(Number);
    let output = computeCandies(data,count);
    console.log(output);
}

function computeCandies(arr,n){
    let r = [];
    for(let i = 0;  i < n; i++){
        r.push(0);
    }
    r[0] = 1;
    let sum = 0;
    for(let i = 1 ; i < n; i++){
        if(arr[i] > arr[i-1]){
            r[i] = r[i-1] + 1;
        }
        else if(arr[i] <= arr[i-1]){
            if(i !== n-1){
                if(arr[i] < arr[i+1]){
                    r[i] = 1;
                }else{
                    
                }
            }else{
                r[i] = 1;
            }
            
        }
        

        sum +=r[i-1];
    }
    sum +=r[n-1];
    console.log(arr);
    console.log(r);
    return sum;
}




let input = `13
2
4
2
6
1
7
8
9
5
4
3
2
1`;
//output
//19

processData(input);
