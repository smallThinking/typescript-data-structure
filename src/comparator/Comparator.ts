import { CompareCallBack } from "./CompareCallBack";

export class Comparator<T> {
  private compare: CompareCallBack<T>;

  constructor(compareFunction?: CompareCallBack<T>) {
    this.compare = compareFunction || this.defaultCompareFunction;
  }
  
  private defaultCompareFunction = (a: T, b: T): number => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  };

  public equal = (a: T, b: T): boolean => {
    return this.compare(a, b) === 0;
  };

  public lessThan = (a: T, b: T): boolean => {
    return this.compare(a, b) < 0;
  };

  public greaterThan = (a: T, b: T): boolean => {
    return this.compare(a, b) > 0;
  };

  public lessThanOrEqual = (a: T, b: T): boolean => {
    return this.lessThan(a, b) || this.equal(a, b);
  };

  public greaterThanOrEqual = (a: T, b: T): boolean => {
    return this.greaterThan(a, b) || this.equal(a, b);
  };
  
  public reverse = () => {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  };
}