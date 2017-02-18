//hackerank quicksort partition problem

let input = `5
4 5 3 7 2`;

processData(input);

function processData(input) {
    let splitInput = input.split('\n');
    let items =  parseInt(splitInput.splice(0,1));
    let arrayData =  splitInput.splice(0,1)[0].split(' ');
    let arr = [];
    for(let i = 0; i < items; i++){
        arr.push(parseInt(arrayData[i]));
    }
    let output = partition(arr,0,items - 1);
    for(let i = 0; i < items ; i++){
        process.stdout.write(output[i] + ' ');
    }
} 

function partition(arr,strt, end){
    let ele = arr[0];
    let pos = end + 1;
    for(let i = end; i > strt; i-- ){
        if(arr[i] >= ele){
            pos = pos - 1;
            let tmp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = tmp;
        }
    }
    let tmp1 = arr[strt];
    arr[strt] = arr[pos - 1];
    arr[pos - 1] = tmp1;
    return arr;
}