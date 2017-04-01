let input = 'aaabccddd';
processData(input);

function processData(input){
    let arr = input.split('');
    //console.log(arr);
    let i = 1;
    while(i < arr.length){
        if(arr[i] == arr[i-1]){
            arr.splice(i-1,2);
            i = 0;
            //console.log(arr);
        }
        i++;
    }
    arr = arr.join('');
    if(arr == ''){
        console.log('Empty String')
    }else{
        console.log(arr);
    }
}