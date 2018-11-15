import {LinkedList} from '../linked-list/LinkedList';
/*
* FIFO queue
*/
export class Queue {
  public linkedList: LinkedList;
  constructor() {
    this.linkedList = new LinkedList();
  }

  // 비어있는지
  public isEmpty = () => {
    return !this.linkedList.head;
  }

  // 다음값이 무엇인지
  public peek = () => {
    if(!this.linkedList.head){
      return null;
    }
    return this.linkedList.head.data;
  }

  // 큐 삽입
  public enqueue = (data: number|string) => {
    return this.linkedList.append(data);
  }

  // 큐 내보내기
  public dequeue = ():number|string => {
    let deletedNode = this.linkedList.deleteHead();
    return deletedNode ? deletedNode.data : null;
  }

}