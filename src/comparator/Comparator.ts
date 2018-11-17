import { CompareCallBack } from "./CompareCallBack";

export class Comparator {
  private compare: CompareCallBack;
  constructor(compareFunction?: CompareCallBack) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }
  static defaultCompareFunction = (a: number | string, b: number | string): number => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  };
  public equal = (a: number | string, b: number | string): boolean => {
    return this.compare(a, b) === 0;
  };
  public lessThan = (a: number | string, b: number | string): boolean => {
    return this.compare(a, b) < 0;
  };
  public greaterThan = (a: number | string, b: number | string): boolean => {
    return this.compare(a, b) > 0;
  };
  public lessThanOrEqual = (a: number | string, b: number | string): boolean => {
    return this.lessThan(a, b) || this.equal(a, b);
  };
  public greaterThanOrEqual = (a: number | string, b: number | string): boolean => {
    return this.greaterThan(a, b) || this.equal(a, b);
  };
  public reverse = () => {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  };
}