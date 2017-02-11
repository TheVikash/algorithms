
function mergeSort(strt, end){
    let mid = Math.floor((end+strt)/2);
    //console.log('strt->',strt,'mid ->',mid,'end->',end);
    if(strt < end){
        mergeSort(strt,mid);
        mergeSort(mid + 1,end);
        merge(strt,mid,end);
    }else{
        return arr;
    }
}

function merge(strt,mid,end){
    let n1 = mid - strt + 1;
    let n2 = end - mid;

    let left  = [];
    let right = [];
    for(let i = 0 ; i < n1; i++){
        left.push(arr[strt + i]);
        
    }
    for(let i = 0 ; i < n2; i++){
        right.push(arr[i + mid + 1]);
    }

    //console.log('strt->',strt,'mid ->',mid,'end->',end, 'left ->', left, 'right->', right);
    left.push(Infinity);
    right.push(Infinity);

    let l = 0, r = 0;
    for(let i = strt; i <= end; i++){
        if(left[l] < right[r]){
            arr[i] = left[l];
            l++;
        }else{
            arr[i] = right[r];
            r++;
        }
    }
    console.log('strt->',strt,'mid ->',mid,'end->',end,arr); 
}



let arr = [8,45,96,457,12,65,87,64,23,165,198,28,143,725,321,85,55,9];
let result = mergeSort(0,arr.length - 1);
console.log(result);


//importiant points to remember
//1. divide arrays into half and then apply merge algorithm.
//2. merge algorithms first get two arrays left and right and then comparing the adjacent array it merge two array in sorted manner.