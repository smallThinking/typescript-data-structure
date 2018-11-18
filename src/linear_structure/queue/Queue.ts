import {LinkedList} from '../linked-list/LinkedList';
/*
* FIFO queue
*/
export class Queue<T> {
  public linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList<T>();
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
  public enqueue = (data: T) => {
    return this.linkedList.append(data);
  }

  // 큐 내보내기
  public dequeue = ():T => {
    let deletedNode = this.linkedList.deleteHead();
    return deletedNode ? deletedNode.data : null;
  }

}