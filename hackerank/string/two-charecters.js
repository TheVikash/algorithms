let input = `10
beeatubeefeab`;
let list = null;
processData(input);
function processData(input) {
  input = input.split('\n');
  let length = parseInt(input[0]);
  let s = input[1];
  let splitS = s.split(s[0]);
  splitS.pop();
  splitS.shift();
  let splitLength = splitS.length;
  for(let i = 0; i < splitS[0].length; i++){
    if(list == null){
      list = new LinkList(splitS[0][i]);
    }else{
      insert(list,splitS[0][i]);
      console.log(list);
    }
  }
  //console.log(list);

}

function LinkList(item){
  this.next = null;
  this.item = item;
  this.count = 0;
}

function insert(node,item){
  let start = node;
  if(node.next == null && node.item == item){
    list = null;
    return;
  }
  if(node.next = null && node.item != item){
    node.next = new LinkList(splitS[0][i]);
    list = node;
    return;
  }

  while(list.next != null){
    if(list.next.item == item){
      list.next = list.next.next;
      return; 
    }else{
      list = list.next;
    }
  }

  if(list.next == null){
    let newNode = new LinkList(item);
    list.next = newNode;
    return;
  }

  
}