export class LinkedListNode {
  public data: number|string;
  public next: LinkedListNode;

  public constructor(data: number|string, next: LinkedListNode = null) {
    this.data = data;
    this.next = next;
  }

  // public toString = (callback? : () => void): string => {
  //   return  callback ? callback(this.data) : `$this.value`;
  // }
}