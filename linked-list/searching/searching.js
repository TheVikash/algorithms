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
    
    return pointer;
}

function search(pointer, ele){
    while(pointer.next != null){
        if(pointer.data == ele){
            return true;
        }
        pointer = pointer.next;
    }

    return false;
}




let pointer = dataInsertion(arr);
let result = search(pointer, 143);
console.log('\x1b[31m', result, '\x1b[0m');