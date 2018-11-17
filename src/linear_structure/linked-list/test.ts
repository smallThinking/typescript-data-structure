import {LinkedList} from './LinkedList';

let node = new LinkedList<object>((a, b) => {
  if(a.name === b.name)
    return 0;
});
node.append({name: 1});
node.append({name: 2});
node.append({name: 3});
node.append({name: 4});

console.log(node.delete({name: 4}));

console.log(JSON.stringify(node, null, 4));




