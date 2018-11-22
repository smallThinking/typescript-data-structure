import { LinkedList } from "../../linear_structure/linked-list/LinkedList";

interface hashNode {
  key: string;
  value: any;
}

export class HashTable {
  public buckets: Array<LinkedList<hashNode>>;
  public keys: object;

  constructor(hashTableSize: number = 32) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList<hashNode>());
    this.keys = {};
  }

  // 문자열의 각 코드 값을 더해 버킷의 길이값 만큼 나누어 인덱스를 반환
  private hash = (key: string) => {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  };

  public set = (key: string, value: any) => {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: nodeData => nodeData.key === key
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.data.value = value;
    }
  };

  public delete = (key: string) => {
    const keyHash = this.keys[key];
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: nodeData => nodeData.key === key
    });

    if (node) {
      return bucketLinkedList.delete(node.data);
    }

    return null;
  };

  public get = (key: string) => {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      callback: nodeData => nodeData.key === key
    });

    return node ? node.data.value : undefined;
  };

  public has = (key: string) => {
    return Object.hasOwnProperty.call(this.keys, key);
  };

  public getKeys = () => {
    return Object.keys(this.keys);
  };
}
