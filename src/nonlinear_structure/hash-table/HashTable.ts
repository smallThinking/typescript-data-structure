import { LinkedList } from '../../linear_structure/linked-list/LinkedList';

export class HashTable<T> {
  public buckets:Array<LinkedList<T>>;
  public keys: object;

  constructor(hashTableSize: number = 32){
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {};
  }

// 문자열의 각 코드 값을 더해 버킷의 길이값 만큼 나누어 인덱스를 반환
  private hash = (key:string) => {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }

  public set = (key:string, value:any) => {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
  }
}