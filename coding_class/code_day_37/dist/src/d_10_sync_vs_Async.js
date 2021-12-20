//d_10_sync vs async.js

console.log('test');

let num = 0;

/* 동기방식*/
// 의식의 흐름대로 나오는것 동기방식
// console.log(num);
// console.log(num +=1);
// console.log(num +=3);
// console.log(num +=5);
// console.log (num);





//만들어진 코드의 순서대로 진행(동기)  적용이 가능한 코드먼저 처리 후 추가 작업 (비동기)

/* 비동기방식*/
// console.log(num);
// console.log(num +=1);

// setTimeout(()=>{
//   console.log(num+=3);
// },100);

// setTimeout(()=>{
//   console.log(num+=5);
// },300);

// console.log(num);