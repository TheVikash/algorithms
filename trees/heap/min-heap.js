let arr = [8,7,6,1,4,3,2,1,15,45,56,0];

let output = buildMinHeapify(arr);
console.log(output);

function buildMinHeapify(arr){
    let size = Math.floor(arr.length/2);
    for(let i = size; i >= 0; i--){
        arr = minHeapify(arr,i, arr.length);
    }
    return arr;
}

function minHeapify(arr,i,heapSize){
    let left = 2*i + 1;
    let right = 2*i + 2;
    let lowest;

    if(arr[i] > arr[left] && left <= heapSize)
        lowest = left;
    else
        lowest = i;

    if(arr[lowest] > arr[right] && right <= heapSize)
        lowest = right;

    if(lowest !== i){
        let tmp = arr[lowest];
        arr[lowest] = arr[i];
        arr[i] = tmp;
        arr = minHeapify(arr, lowest, heapSize);
    }
   
    console.log(arr);
    return arr;
}