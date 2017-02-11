
function quickSort(strt,end){
    if(strt < end){
        let mid = partition(strt, end);
        quickSort(strt, mid - 1);
        quickSort(mid + 1, end);
    }else{
        return arr;
    }
}

function partition(strt, end){
    let ele = arr[end];
    let pos = strt - 1;
    for(let i = strt; i < end; i++ ){
        if(arr[i] <= ele){
            pos = pos + 1;
            let tmp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = tmp;
        }
    }
    let tmp1 = arr[end];
    arr[end] = arr[pos + 1];
    arr[pos + 1] = tmp1;
    console.log('strt ->',strt,'end ->',end,'pos ->',pos, arr);
    return pos + 1;
}

let arr = [8,45,96,457,12,65,87,64,23,165,198,28,143,725,321,85,55,9];

let result = quickSort(0, arr.length);
console.log(result);

//here the importnat thing is partition of array.
// in partition the main logic is to place the pivot element in its right place ie in its sorted place.
