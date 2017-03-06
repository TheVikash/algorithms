let h = 50 ;
let num = 25;
let root = Math.pow(2,h) - 1;
let ans = calc(h,num,root);
console.log("***********",ans);

function calc(h,num,root){
    let left = root - Math.pow(2,h-1);
    let right = root - 1;
    console.log(root,left, right);
    if(left === num || right === num){
        console.log('---------',root);
        return root;
    }
    if(num > left){
       return calc(h-1,num,right);
    }else{
       return calc(h-1,num,left);
    }
}