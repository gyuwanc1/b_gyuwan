//calc.js

/*
//방법 1 - IIFE
let math = {};
(() =>{

let sum = (a,b) => {
  return a + b;
};
  math.sum = sum;

})();
*/
//---------------------------------------------

//방법2
// let sum = (a,b)=> {
//   return a+b;
// };

// export default sum;

// export default function sum (a,b){
//   return a + b;
// }
//===============================================

const multi = (a , b) => {
  return a * b;
}
const minus = (a,b) => {
  return a - b;
}

 export {multi, minus };


// css/scss 불러올때 import, 내보낼때 ?
//js는 불러올때 import, 내보낼때 export로 선택해서  서버가 돌아가야 내보내기 가능

