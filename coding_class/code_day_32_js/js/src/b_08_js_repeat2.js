//b_08_js_repeat2.js

//for(in){}----------------------------------

//for(임의변수 in 객체){}
//@for $i from 1 through 10 {}

/* 안좋은 예시
var arr = ['딸기','바나나','키위','수박','포도'];
for(var sam in arr){
  console.log(arr[sam]);
} 
*/

var obj = {
  '딸기' : 'red',
  '바나나' : 'yellow',
  '키위' : 'brown',
  '수박' : 'green',
  '포도' : 'purple',
};

var sample;
for(var sample in obj){
  console.log(obj[sample]);
}

//for:범용처리 단 객체는 불가능, for-in:객체를 순환하기위해 사용함

// for each=======================================================
var arr = ['딸기','바나나','키위','수박','포도'];
// 배열.forEach()

arr.forEach(function(data, index){ //forEach는 들어오는 인자의 첫번째는 값, 두번째는 순서
console.log( index, data);
});

/*이벤트 메소드의 특징
선택자.이벤트(기능,function(){}) */

var ul = document.querySelector('ul');
var li = ul.children;

console.log (arr);
console.log (li);

// for는 기본문법, forEach()메서드 

