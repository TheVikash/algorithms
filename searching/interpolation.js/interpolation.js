let arr = [1,4,5,8,45,95,100,110,158];

function interpolationSearch(ele,strt,end){
    let mid =  strt +  Math.floor((ele - arr[strt])*(end - strt)/(arr[end]  - arr[strt]));
    console.log('mid -->',mid);
    if(strt > end){
        return 'NotFound';
    }
    else{
        if(arr[mid] == ele){
            return mid;
        }
        else if(arr[mid] < ele){
            return interpolationSearch(ele, mid + 1, end);
        }
        else{
            return interpolationSearch(ele,strt,mid - 1);
        }
    }
    
}

let num = interpolationSearch(95,0,arr.length-1);
console.log('Result ----> ',num);


//Following are the condition which are important
//1. if start is greater than end then the search will be terminated
//2. if ele is equal to array of mid than answer is found.
//3. if ele is greater than array of mid then right half array will be searched and vice versa.

// The Interpolation Search is an improvement over Binary Search for instances,
// where the values in a sorted array are uniformly distributed. 
// Binary Search always goes to middle element to check.
// On the other hand interpolation search may go to different locations according the value of key being searched.
// For example if the value of key is closer to the last element,
// interpolation search is likely to start search toward the end side.