function processData(input) {
    console.log(input);
    return 'hello'
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   console.log('data ->', _input);
   processData(_input);
});
