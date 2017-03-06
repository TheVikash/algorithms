const _ = require('lodash');

function processData(input) {
    let splitInput = input.split('\n');
    let veSplit = splitInput.splice(0,1)[0].split(' ');
    let vertex = parseInt(veSplit[0]);
    let edges = parseInt(veSplit[1]);
    let adjListData = splitInput.splice(0,edges);
    let adjacentList = getAdjList(adjListData, vertex);
}

function primsMST(adjList, source){
    let q = [];
    let sum = 0;
    for(let key in adjList){
        let obj = { item  : key, pi : null , weight : Infinity};
        if(key == source){
            obj['weight'] = 0;
        }
        q.push(obj);
    }
    q = buildMinHeapify(q);
    while(q.length !== 0){
        let u = q.shift();
        sum = sum + u.weight;
        let uEdges = adjList[u.item].length;
        for(let i = 0; i < uEdges ; i++){
            let index = graphHas(q, adjList[u.item][i]['v']);
            //console.log(index,uEdges,adjList[u.item][i]['v']);
            if(index != null){
                if( adjList[u.item][i]['w'] < q[index].weight){
                    q[index].weight = adjList[u.item][i]['w'];
                    q[index].pi = u.item;
                }
            }
        }
        q = buildMinHeapify(q);
    }
    return sum;
}

function graphHas(arr,item){
    let length = arr.length;
    for(let i =0; i < length ; i++){
        if(arr[i].item == item){
            return i;
        }
    }
    return null;
}

function buildMinHeapify(arr){
    let size = Math.floor(arr.length/2);
    for(let i = size; i >= 0; i--){
        arr = minHeapify(arr,i, arr.length);
    }
    return arr;
}

function minHeapify(arr,i,heapSize){
    let left = 2*i + 1;
    let right = 2*i + 2;
    let lowest;
    if(left < heapSize){
        if(arr[i].weight > arr[left].weight && left <= heapSize)
            lowest = left;
        else
            lowest = i;
    }else{
        lowest = i;
    }

    if(right < heapSize){
        if(arr[lowest].weight > arr[right].weight && right <= heapSize)
            lowest = right;
    }

    if(lowest !== i){
        let tmp = arr[lowest];
        arr[lowest] = arr[i];
        arr[i] = tmp;
        arr = minHeapify(arr, lowest, heapSize);
    }
   
    return arr;
}

function getAdjList(data , vertex){
    let dataLength = data.length;
    let adjList = {};
    for(let i = 1; i <= vertex; i++){
        adjList[i] = [];
    }
    for(let i = 0 ;  i < dataLength; i++){
        let edge = data.splice(0,1)[0].split(' ');
        let obj = { v : edge[1], w : parseInt(edge[2])};
        let obj1 = { v : edge[0], w : parseInt(edge[2])};
        adjList[edge[0]].push(obj);
        adjList[edge[1]].push(obj1);
    }
    //console.log(adjList);
    return adjList;
} 



let input = `4 6
1 2 5
1 3 3
4 1 6
2 4 7
3 2 4
3 4 5`;

processData(input);
