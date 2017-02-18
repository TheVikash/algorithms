//top down with memoization 


function memoizedCutRod(p,n){
    let r = [];
    for(let i = 0 ; i <= n; i++){
        r.push(-1);
    }
    return memoizedCutRodAux(p,n,r);
}

function memoizedCutRodAux(p,n,r){
    let q;
    if(r[n] >= 0){
        return r[n];
    }
    if(n == -1){
        q = 0;
    }else{
        q = -1;
        for(let i = 0 ; i <= n; i++){
            q = Math.max(q,p[i] + memoizedCutRodAux(p, n-i-1,r));
        }
    }
    r[n] = q;
    return q;
}

let array = [1,5,8,9,10,17,17,20,24,30];
let revenue = memoizedCutRod(array, 8);
console.log('revenue -> ', revenue);
