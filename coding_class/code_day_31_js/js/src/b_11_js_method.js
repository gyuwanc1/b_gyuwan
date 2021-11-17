//b_11_js_method.js

//메소드:형태.수행(메소드), 사용자 지정형태,메소드()
//내장함수: 이미만들어진형태.메소드() | 민들어져있는 함수()
//배열 메소드는 배열형식을 이용하여 처리하는 다양한 기능을 가진 함수
//일부는 배열메소드가 아닌 것도 존재(property, 다른곳에서도 사용가능한 범용)

// var array = ['maker','remote','pen'];
// console.log(array.length);

var text = 'javascript';
console.log(text.length);

var obj = {'maker':'dog','dogdog':'duck'};
console.log(obj.length);

console.log(Object.keys(obj).length);

//=================================================

console.clear();
var array = ['maker','remote','pen'];

array.push('mouse');
array.unshift('moniter');
console.log(array);
array.shift();
array.pop();
console.log(array);

var joinText = array.join ('');
console.log(joinText);

var spliteText = joinText.split('');
console.log(spliteText);

array.forEach(function(d,i){
  console.log(d);
});

spliteText.reverse();//배열의 목록을 뒤집기!!
console.log(spliteText);

spliteText.sort(); //배열의 목록울  순서대로 재배치!!
console.log(spliteText);

var indexCk = array.indexOf('mug'); //indexof 내부에 값을 입력하여, 동일한 값이 존재하면, 그중 첫번째가 위치한것을 파악하여 위치숫자를 표기
//존재하지 않는 다면 -1; 
console.log(indexCk);

var replaceArr = array.splice(1,0,'cam','mug','charger'); //[].splice 중간에 삽입/삭제하는 기능 (순번,삭제갯수,삽입요소)
console.log(array); //중간삽입 

var array2 = ['desktop','tablet','smartphone'];
console.log(array, array2);

// array.splice(0,0,array2);
// console.log(array);

var conArray = array.concat(array2);
console.log(conArray); //배열과 배열을 하나의 배열로 완성하는 것.

var arrayN = [10,5,2,50,80,90,200];
var sum=0;
arrayN.forEach(function(d,i){
  sum +=d;
});
console.log(sum); //배열 숫자 +연산

var ck=arrayN.reduce( function(a,b){ 
  // console.log(a,b);
  var c = a+b;
  console.log(a,b);
  return c;
});

//====================================================================

// [].filter(function(){ return}): 반환된 값을 저장하여 이후 처리 

var nList = [1,2,3,4,5,6,7];

var filterList = [];
/*
nList.forEach(function(d,i){
  if (d > 4) {
    filterList.push(d);
  }
});
*/
//filter는 체크된 내용중 return값만 별도로 담아서 처리 
filterList=nList.filter(function(d,i,k){
  //console.log(d,i,k) : data,index,array 순서
  if( d>4 ){
    return d;
  }
});
console.log('filterList',filterList);

