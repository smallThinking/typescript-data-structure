import {Stack} from './Stack';

let stack = new Stack();

stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
stack.push("6");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push("7");
console.log(stack.toArray());
console.log(stack.pop());