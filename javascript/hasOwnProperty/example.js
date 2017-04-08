// the object 
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// somewhere else in the code a method was added to all objects 
if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () { };
}

//pattern
console.log('\n ***** Ist pattern ***** \n')
for (var i in man) {
    if (man.hasOwnProperty(i)) {
        console.log(i, ":", man[i]);
    }
}

//2nd pattern
console.log('\n ***** II pattern ***** \n')
for (var i in man) {
    if (Object.prototype.hasOwnProperty.call(man, i)){
        console.log(i, ":", man[i]);
    }
}


console.log('\n ***** antipattern will print all ***** \n')
//antipattern
for (var i in man) {
    console.log(i, ":", man[i]);
}
