import {LinkedList} from './LinkedList';
import {LinkedListNode} from './LinkedListNode';

let node = new LinkedList(new LinkedListNode('node 0'));

node.append('node 1');
node.append(2);
node.append(3333333);
node.append('node 4');
node.append('node 12');

console.log(node.delete('node 12'));
console.log(node.delete(2));
console.log(node.toArray());

console.log(JSON.stringify(node, null, 4));




