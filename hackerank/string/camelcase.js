let input = 'saveChangesInTheEditor';
processData(input);

function processData(input){
    let count = 0;
    length = input.length;
    for(let i = 0; i < length ; i++){
        let code = input.charCodeAt(i);
        if(code <= 90){
            count++;
        }
    }
    console.log(count +1);
}