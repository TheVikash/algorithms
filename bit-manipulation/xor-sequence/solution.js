let input = `3
2 4
2 8
5 9`;

processData(input);

function processData(input){
    input = input.split('\n');
    let test = parseInt(input.splice(0,1)[0]);
    for(let i = 0 ; i < test; i++){
        let data = input.splice(0,1)[0].split(' ').map(Number);
        let from = data[0];
        let to = data[1];
        let output = sequence(from, to);
        console.log(output);
    }
}

function sequence(from ,to){
    let fromItem = getSeq(from);
    
    // let xorSum = fromItem;
    // for(let i = from + 1; i <= to ; i++){
    //     fromItem = fromItem ^ i;
    //     xorSum = xorSum ^ fromItem;
    // }
    return fromItem;
}

function getSeq(from){
    let x = from % 4;
    let fromItem = 0;
    if(x == 0){
        fromItem = from;
    }else if(x == 1){
        fromItem = 1;
    }else if(x == 2){
        fromItem = from +1;
    }else{
        fromItem = 0;
    }
    return fromItem;
}
