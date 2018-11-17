import { Comparator as _Comparator } from "./comparator/Comparator";

let comparator = new _Comparator();

console.log(comparator.equal("12", "123"));
console.log(comparator.lessThan(1, 2));
comparator.reverse();
console.log(comparator.equal("12", "123"));
console.log(comparator.lessThan(1, 2));
comparator.reverse();
console.log(comparator.equal("12", "123"));
console.log(comparator.lessThan(1, 2));

