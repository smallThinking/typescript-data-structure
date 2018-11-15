import {LinkedList} from '../linked-list/LinkedList';

export class Stack {
  public linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList;
  }

  //있는지 없는지 확인
  public isEmpty = ():boolean => {
    return !this.linkedList.head;
  }


  //다음에 나올 데이터 확인
  public peek = (): number|string => {
    if(!this.linkedList.head){
      return null;
    }

    return this.linkedList.head.data;
  }


  // 데이터 삽입
  public push = (value) => {
    this.linkedList.prepend(value);
  }


  //데이터 꺼내기
  public pop = ():number|string => {
    const removedHead = this.linkedList.deleteHead();

    return removedHead ? removedHead.data : null;
  }

  
  //데이터를 array형태로 변환
  public toArray = (): Array<number|string> => {
    return this.linkedList.toArray().map(node => node.data);
  }
}