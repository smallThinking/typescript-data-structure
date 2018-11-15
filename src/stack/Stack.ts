import {LinkedList} from '../linked-list/LinkedList';
import { LinkedListNode } from '../linked-list/LinkedListNode';

export class Stack {
  public linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList;
  }

  public isEmpty = ():boolean => {
    return !this.linkedList.head;
  }

  public push = (value) => {
    this.linkedList.prepend(value);
  }

  public pop = ():number|string => {
    const removedHead = this.linkedList.deleteHead();

    return removedHead ? removedHead.data : null;
  }

  public toArray = (): Array<number|string> => {
    return this.linkedList.toArray().map(node => node.data);
  }
}