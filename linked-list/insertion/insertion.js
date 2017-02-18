let arr = [8,45,96,457,12,65,87,64,23,165,198,28,143,725,321,85,55,9];

function linkedList(data){
    this.data = data;
    this.next = null;
}

function dataInsertion(arr){
    let arrLength = arr.length;
    let preNode = new linkedList(arr[0]);
    let pointer = preNode;
    for(let i = 1; i < arrLength; i++){
        let currNode = new linkedList(arr[i]);
        preNode.next = currNode;
        preNode = currNode;
    }
    //traverse
    while(pointer.next != null){
        process.stdout.write(pointer.data + " ");
        pointer = pointer.next;
    }
}


dataInsertion(arr);