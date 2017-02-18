//bottom up approach 

function bottomUpApproach(p,n){
    let r = [];
    r.push(0);
    for(j = 0 ; j <= n ; j++){
        q = -1;
        for( i = 0; i <= j; i++){
            q = Math.max(q, p[i] + r[j-i])
        }
        r.push(q);
    }
    return r[n+1];
}

let array = [1,5,8,9,10,17,17,20,24,30];
let revenue = bottomUpApproach(array, 8);
console.log('revenue -> ', revenue);
