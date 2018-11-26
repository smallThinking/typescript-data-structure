import { Comparator } from "../../comparator/Comparator";
import { HashTable } from "../hash-table/HashTable";

export class BinaryTreeNode {
  public left;
  public right;
  public parent;
  public value: number;
  public meta: HashTable;
  public nodeComparator: Comparator<number>;

  /**
   * @param {number} [value]
   * @return {number}
   */
  constructor(value: number = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
    this.meta = new HashTable();
    this.nodeComparator = new Comparator<number>();
  }

  /**
   * @return {number}
   */
  get leftHeight(): number {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  /**
   * @return {number}
   */
  get rightHeight(): number {
    if (!this.right) {
      return null;
    }

    return this.right.height + 1;
  }

  /**
   * @return {number}
   */
  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }
}
