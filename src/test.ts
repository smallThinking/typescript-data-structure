import {HashTable} from './nonlinear_structure/hash-table/HashTable';

let hash = new HashTable();

hash.set('jeong', 1);
hash.set('jeong', 2);
hash.set('kim', 1);
hash.set('hong', 3);
hash.set('lee', 3);

console.log(hash.get('jeong'));
