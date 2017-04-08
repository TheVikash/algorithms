
// constructor 
function Waffle() {
    this.tastes = "yummy";
}


// a new object 
var good_morning = new Waffle();
console.log(typeof good_morning); // "object" 
console.log(good_morning.tastes); // "yummy"

// antipattern: 
// forgotten `new` 
var good_morning = Waffle();
console.log(typeof good_morning); // "undefined" 
console.log(global.tastes); // "yummy"


//to overcome above problem we can do it like this
function Waffle() { 
    if (!(this instanceof Waffle)) { 
        return new Waffle(); 
    } this.tastes = "yummy"; 
} 
Waffle.prototype.wantAnother = true;

console.log('\n  ***********solving above problem*************** \n')
// testing invocations 
var first = new Waffle(), second = Waffle(); 
console.log(first.tastes); // "yummy" 
console.log(second.tastes); // "yummy" 
console.log(first.wantAnother); // true 
console.log(second.wantAnother); // true








