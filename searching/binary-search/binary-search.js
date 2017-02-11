let arr = [1,4,5,8,45,95,100,110,158];

function binarySearch(ele,strt,end){
    let mid = Math.floor((end + strt)/2);
    console.log('mid -->',mid);
    if(strt > end){
        return 'NotFound';
    }
    else{
        if(arr[mid] == ele){
            return mid;
        }
        else if(arr[mid] < ele){
            return binarySearch(ele, mid + 1, end);
        }
        else{
            return binarySearch(ele,strt,mid - 1);
        }
    }
    
}

let num = binarySearch(99,0,arr.length-1);
console.log('Result ----> ',num);


//Following are the condition which are important
//1. if start is greater than end then the search will be terminated
//2. if ele is equal to array of mid than answer is found.
//3. if ele is greater than array of mid then right half array will be searched and vice versa.