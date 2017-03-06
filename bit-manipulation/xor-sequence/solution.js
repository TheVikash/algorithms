const input1 = require('./input');
let input = `3
2 4
2 8
5 9`;

processData(input1);

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
    let fromItemTo = ((from + 1) + (4 - (from + 1) % 4)) - 1;
    //console.log('from----------',fromItem,fromItemTo);
    let xorSum = fromItem;
    for(let i = from + 1; i <= fromItemTo ; i++){
        fromItem = fromItem ^ i;
        xorSum = xorSum ^ fromItem;
    }

    let toItemto = ((to + 1) - ((to + 1) % 4)) - 1;
    let between = ((toItemto - fromItemTo)/4)%2 == 0 ? 0 : 2;
    xorSum = xorSum ^ between;
    let toItem = getSeq(toItemto); 
    //console.log('----------',toItemto,between,xorSum,toItem);
    for(let i = toItemto + 1; i <= to ; i++){
        toItem = toItem ^ i;
        xorSum = xorSum ^ toItem;
    }
    return xorSum;
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
