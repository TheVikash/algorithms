let time = 0;  //global variable

function depthFirstSearch(graph){
    let traverse = {};                                     // for tracking all info while travering such as its distance, from where it is connected etc
    for(let key in graph){
        traverse[key] = {
            color : 'white',
            d : Infinity,
            f : Infinity,
            pi : null
        }
    }
   for(let u in graph){
       if(traverse[u] === 'white'){
           dfsVisit(traverse,graph,u);
       }
   }
}

function dfsVisit(traverse, graph, u){
    time = time + 1;


}

let graph  = {
    s : ['w','r'],
    r : ['v','s'],
    t : ['t','w','x','u'],
    u : ['u','t','y','x'],
    v : ['r'],
    w : ['x','t','x'],
    x : ['t','u','y','w'],
    y : ['u','x']
};

let result = depthFirstSearch(graph);
console.log('\x1b[31m',result,'\x1b[0m')

