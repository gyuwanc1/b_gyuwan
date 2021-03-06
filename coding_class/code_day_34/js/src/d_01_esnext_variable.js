"use strict";

// d_01_esnext_variable.js
// let i = 0;
// console.log(i);
//이를 허용하는 것을 막기위해 과거'use strict'모드를 강제 적용하여 사용 
//위에서 발생한 var에 대한 다양한 문제점(호이스팅, 다양한 기본 문법에서 변수 값이 외부확인 가능, 함수표현식)을 해결하기 위해,
//새로운 변수 설정방법 등장 ( const, let ) - var는 이제 사용X
// const는 변하지 않는  수 -상수: 생성과 동시에 값을 작성
// let은 변하게 하는 수 - 변수: 춯 변경이 가능
// const의 주 사용처 :  function(){}, {}, []
var arr = [];
arr.push(1);
arr.push(4, 'a');
arr.push(9);
console.log(arr); // const option = {rel:true};
// console.log(option.rel);
// option = false;
// console.log(option.rel);
//====================================

var arrayList = [1, 2, 4, 5, 9];
console.log(arrayList);
arrayList = []; //------------

var a = 5; //값자체를 바꾸려면 let으로 

a += 4; //=====================================

var fnTest = function fnTest(a, b) {
  var k = a * b;
  return k;
};

fnTest(4, 5);
fnTest(3, 100); // console.log(k);
//========================================
//let i =0;

for (var i = 0; i < 10; i += 1) {
  console.log(i);
} // console.log(i);
//같은 변수명 중복 사용금지
//========================================
//const어디에 사용하는가?
//[], {} , function(){}
//dom