export class LinkedListNode<T> {
  public data: T;
  public next: LinkedListNode<T>;

  public constructor(data: T, next: LinkedListNode<T> = null) {
    this.data = data;
    this.next = next;
  }

  public toString = (callback): string => {
    return  callback ? callback(this.data) : `${this.data}`;
  }
}