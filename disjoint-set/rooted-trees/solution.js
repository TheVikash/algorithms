let elements =  ['a','b','c','d','e','f','g','h','i','j',];
let sets = {};
init();
union(sets['a'], sets['d']);
union(sets['e'], sets['g']);
union(sets['a'], sets['c']);
union(sets['h'], sets['i']);
union(sets['a'],sets['b']);
union(sets['e'],sets['f']);
union(sets['b'],sets['c']);
console.log(sets);

function Tree(x){
    this.p = null;
    this.name = x;
    this.rank = null;
}

function makeSets(x){
    let node = new Tree(x);
    node.p = node;
    node.rank = 0;
    sets[x] = node;
}

function findSet(node){
    if(node.p !== node){
        node.p = findSet(node.p);
    }
    return node.p;
}

function link(x,y){
    if(x.rank > y.rank){
        y.p = x;
    }else{
        x.p = y;
        if(x.rank == y.rank){
            y.rank = y.rank + 1;
        }
    }
}

function union(x,y){
    link(findSet(x),findSet(y));
}

function init(){
    let length = elements.length;
    for(let i = 0; i < length;  i++){
        makeSets(elements[i]);
    }
} 

