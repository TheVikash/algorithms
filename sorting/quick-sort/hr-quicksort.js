//hackerank quicksort partition problem

let input = `7
5 8 1 3 7 9 2`;

processData(input);

function processData(input) {
    let splitInput = input.split('\n');
    let items =  parseInt(splitInput.splice(0,1));
    let arrayData =  splitInput.splice(0,1)[0].split(' ');
    let arr = [];
    for(let i = 0; i < items; i++){
        arr.push(parseInt(arrayData[i]));
    }
    quickSort(arr,0,arr.length - 1);
} 

function quickSort(arr,strt,end){
    if(strt < end){
        let mid = partition(arr,strt, end);
        quickSort(arr,strt, mid - 1);
        let sample = arr;
        quickSort(arr,mid + 1, end);
        
        
        
    }else{
        return arr;
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
    return pos - 1;
}