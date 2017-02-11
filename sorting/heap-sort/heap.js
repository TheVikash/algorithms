
function heapSort(arr){
    arr = buildMaxHeapify(arr);
    let arrLength = arr.length - 1;
    let heapSize = arr.length - 1;
    for(let i = arrLength; i > 0; i--){
        let tmp = arr[i];
        arr[i] = arr[0];
        arr[0] = tmp;
        heapSize  = heapSize - 1;
        arr  = maxHeapify(arr,0,heapSize);
    }

    return arr;
}


function buildMaxHeapify(arr){
    let size = Math.floor(arr.length/2);
    for(let i = size; i >= 0; i--){
        arr = maxHeapify(arr,i, arr.length);
    }
    return arr;
}

function maxHeapify(arr,i,heapSize){
    let left = 2*i + 1;
    let right = 2*i + 2;
    let largest;

    if(arr[i] < arr[left] && left <= heapSize)
        largest = left;
    else
        largest = i;

    if(arr[largest] < arr[right] && right <= heapSize)
        largest = right;

    if(largest !== i){
        let tmp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = tmp;
        arr = maxHeapify(arr, largest, heapSize);
    }
   
    console.log(arr);
    return arr;
}









let arr = [8,45,96,457,12,65,87,64,23,165,198,28,143,725,321,85,55,9];

let result = heapSort(arr);
console.log('result -->', result);

//the array can be represented as a heap tree which is complete binary tree and satisfy the max-heap property.
//first step is to organize the array into the heap array which satisfy all its properties.
// the left and right of a root can be calculated from its root index.
//then once array is converted onto maxheap then we have to exchange the root element to the last element.
//as the root element will be always greater than every child.
// then again we have to use maxheap function to satisfy maxheap property but the size of heap array will be less by one.
