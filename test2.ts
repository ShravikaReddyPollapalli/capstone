//tsc --module commonjs test2.ts

import {Add} from './test1';  

let obj3 = new Add(10,20);
obj3.sum();