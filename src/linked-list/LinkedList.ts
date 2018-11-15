import {LinkedListNode} from './LinkedListNode';

export class LinkedList {
  public head: LinkedListNode;
  public tail: LinkedListNode;

  constructor(node: LinkedListNode = null) {
    this.head = node;
    this.tail = node;
  }

  //append(뒤에 삽입)
  public append = (data: number|string): LinkedList => {
    const newNode = new LinkedListNode(data, null);
    if(!this.head) {
      //노드가 없으면?
      this.head = newNode;
      this.tail = newNode;
    }else {
      //노드가 있으면?
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }



  //prepend(앞에 삽입)
  public prepend = (data: number|string): LinkedList => {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  } 



  //find
  public find = (data: number|string): LinkedListNode => {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode){
      if(currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }


  //Delete
  public delete = (data: number|string): LinkedListNode => {
    if(!this.head) {
      //비어있는 리스트이면
      return null;
    }

    let deleteNode = null;

    // 지워야 할 것이  처음인 경우
    if(this.head.data === data){
      deleteNode = this.head;
      this.head = this.head.next;
      return deleteNode;
    }

    let currentNode = this.head;

    while(currentNode.next){
      if(currentNode.next.data === data) {
        deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // 지워야 할 것이  마지막인 경우
    if(this.tail.data === data) {
      this.tail = currentNode;
    }

    return deleteNode;
  }



  //데이터를 array형태로 추출
  public toArray = ():Array<number|string> => {
    let nodes = [];

    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  //Traverse


  //Traverse in Reverse
}