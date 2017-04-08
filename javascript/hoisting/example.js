
myname = "global"; // global variable 
function func() {
    var myname; // same as -> var myname = undefined; 
    console.log(myname); // "undefined" 
    myname = "local"; 
    console.log(myname); // "local" 
} 

func();

