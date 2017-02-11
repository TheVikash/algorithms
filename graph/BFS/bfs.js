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


// breadth first search is a search algorithm to traverse all the connected node and find its actual distance from the source.
// the first part is to represent the graph in adjacent list.\
// the second part is to make an array of object of all vertices.
// assign some properties into that object such as its distance and is it already traversed or not.
// then pass the source element into the queue 
// then start the loop until queue become empty 
// now deque the ele and enque all element which is directly connected to it and make changes to its properties accordingly.
// now enjoy