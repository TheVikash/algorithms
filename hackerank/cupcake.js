function main(input) {
    input = input.split('\n');
    var n = parseInt(input[0]);
    calories = input[1].split(' ');
    calories = calories.map(Number).sort();
    let miles  = 0;
    for(let i = 0 ; i < n ; i++){
        miles = miles + calories[n-1-i]*Math.pow(2,i);
    }
    
    console.log(miles);

}

let input = `3
1 5 8`;

main(input);