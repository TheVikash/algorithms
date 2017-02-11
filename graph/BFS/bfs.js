function breadthFirstSearch(graph){
    let traverse = {};
    for(let key in graph){
        traverse[key] = {
            color : 'white',
            d : Infinity,
            pi : null
        }
    }
    let queue = [];
    let d = 0;
    traverse.s.color = 'gray';
    traverse.s.d = 0;
    queue.push('s');//Enqueue
    while(queue.length != 0){
        let deque = queue.shift();
        for (let i = 0 ; i < graph[deque].length; i++){
            if(traverse[graph[deque][i]].color === 'white'){
                traverse[graph[deque][i]].color = 'gray';
                traverse[graph[deque][i]].d = traverse[deque].d + 1;
                traverse[graph[deque][i]].pi = deque;
                queue.push(graph[deque][i]);
            }
        }
        traverse[deque].color = 'black';
    }
    return traverse;

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

let result = breadthFirstSearch(graph);
console.log('\x1b[31m',result,'\x1b[0m')