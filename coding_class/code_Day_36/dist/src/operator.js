//operator.js


//방법 1-1
// console.log(sum(4,5));
//-------------------------------
//방법2
// import sum from './calc.js';
// console.log(sum(2,5));  //받아주는 입장에서 변수명변경 가능하다.

//--------------------------------
// import {multi} from './calc.js';
// console.log (multi(5,4));

//-------------------------------------

import * as calc from './calc.js';
console.log(calc.multi(6,4));
console.log(calc.minus(5,4));