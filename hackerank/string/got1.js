let input = 'cdcdcdcdeeeef';
processData(input);

function processData(input) {
    let array = input.split('');
    let track = {};
    let count = array.length;
    for(let i = 0; i < count; i++){
        if(track[array[i]] == undefined){
            track[array[i]] = 1;
        }else{
            track[array[i]] += 1;
        }
    }
    let oddCount = 0;
    for(let key in track){
        if(track[key] %2 !=0){
            oddCount ++;
        }
    }
    if(count%2 != 0 && oddCount == 1){
        console.log('YES');
    }else if(count%2 == 0 && oddCount == 0){
        console.log('YES');
    }else{
        console.log('NO');
    }
} 