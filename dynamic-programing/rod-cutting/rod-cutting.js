let array = [1,5,8,9,10,17,17,20,24,30];

function cutRod(p,n){
    if(n == -1){
        return 0;
    }
    let pLength = p.length;
    let q = -1;
    for(let i = 0 ; i <= n; i++){
        console.log(q, i, p[i], n);
        q = Math.max(q, p[i] + cutRod(p, n-i-1));
    }
    return q;
}

let revenue = cutRod(array, 6);
console.log('revenue -> ', revenue);