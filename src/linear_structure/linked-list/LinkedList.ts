import { LinkedListNode } from "./LinkedListNode";
import { Comparator } from "../../comparator/Comparator";

export class LinkedList<T> {
  public head: LinkedListNode<T>;
  public tail: LinkedListNode<T>;
  private compare: Comparator<T>;

  constructor(comparatorFunction?) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator<T>(comparatorFunction);
  }

  //append(뒤에 삽입)
  public append = (data: T): LinkedList<T> => {
    const newNode = new LinkedListNode(data, null);
    if (!this.head) {
      //노드가 없으면?
      this.head = newNode;
      this.tail = newNode;
    } else {
      //노드가 있으면?
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  };

  //prepend(앞에 삽입)
  public prepend = (data: T): LinkedList<T> => {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  };

  //find
  public find = ({
    data = undefined,
    callback = undefined
  }): LinkedListNode<T> => {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.data)) {
        return currentNode;
      }

      if (data !== undefined && this.compare.equal(currentNode.data, data)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

  //Delete
  public delete = (data: T): LinkedListNode<T> => {
    if (!this.head) {
      //비어있는 리스트이면
      return null;
    }

    let deleteNode = null;

    // 지워야 할 것이  처음인 경우
    if (this.compare.equal(this.head.data, data)) {
      deleteNode = this.head;
      this.head = this.head.next;
      return deleteNode;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (this.compare.equal(currentNode.next.data, data)) {
        deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // 지워야 할 것이  마지막인 경우
    if (this.compare.equal(this.tail.data, data)) {
      this.tail = currentNode;
    }

    return deleteNode;
  };

  public deleteHead = (): LinkedListNode<T> => {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    if (this.head.next) {
      this.head = currentNode.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  };

  public deleteTail = (): LinkedListNode<T> => {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  };
  //데이터를 array형태로 추출
  public toArray = (): Array<LinkedListNode<T>> => {
    let nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  };

  //Traverse

  //Traverse in Reverse
}
