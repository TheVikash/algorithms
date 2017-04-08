

let scareMe = function(){
    console.log('Ist One');
    scareMe = function(){
        console.log('IInd One')
    }
}

scareMe();
scareMe();