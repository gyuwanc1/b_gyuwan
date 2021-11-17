//b_10_js_remind_01-1.js

var i =0

//작업중간, 연산과정상 필요한 결과물을 확인
console.log('결과물은 개발자모드에서만 확인가능');

// 내용을 작업하고나서 끝에는 ;을 붙여라.
//;을 붙이는 정확한 위치
//1.변수 선언/수정 끝
//2.함수를 호출시 끝에
//3.삼항연산자의 끝에/식의종료 -> ()?:; 

//while (){} X
//if(){}else{} X
//[].forEach(); ->object에만 사용

//----------------------------------------------------------------
//형타입
//1. 숫자
//2. 문자
//3. boolean : true/false
//4. undefined  // null
//5. 객체 ([], {})
//6. 함수: 여러가지 기능의 묶음

//연산

var a =10;
console.log(a + 5); //15
console.log(a + '5'); // 105
console.log(a + 'a'); //10a
console.log(parseInt(a+'a'));

//자기 자신에게 추가연산
//+=, -=, /=, *=,%=

(a >2)?(a=10):(a=20);
console.log(a);

// []순서가 있는 값
// {} 순서가 없다. 속성과 속성값 정의

//========================================================================

//var fn = function(){
//  return a+b;
//};
//fn ();

//var fn1 = 1; 이것은 값 (일반변수)
//var fn2 = [2];  이것은 주소 (참조변수)
//======================================================================
//문법

// if(){}else{}
// switch(){}
// for(){}
// function(){}

var launch ='돈까스';
if(launch ==='짜장면'){
  console.log('짜장면 먹으러 갑시다');
}else if (launch === '볶음밥'){
  console.log('볶음밥 먹으러 갑시다');
}else if (launch === '삼겹살'){
  console.log('삼겹살 먹으러 갑시다');
}else{
  console.log(launch+'먹으러 갑시다.');
}

//========================================================
var switchN = 1;
var data;
switch(switchN){

  case 1:
    data='마우스 왼버튼을 클릭하였습니다.';
  break;

  case 2:
    data='마우스 오른버튼을 클릭하였습니다.';
  break;

  case 3:
    data='마우스 휠버튼을 클릭하였습니다';
  break;

  case 4:
    data='마우스 측면버튼을 클릭하였습니다.';
  break;

  default:
    data='마우스 기타 다른버튼을 클릭하였습니다.';
  break;

}
console.log(data);

//for문===========================================

var arr2 = [1,2,3,4,5,6,7,8,9,10]
//for(최초; 비교 ; 증감){} //basic
for(var j=0; j<10; j++){//10번 반qhr 수행
  console.log('j', j);
}

// [].forEach(function(각 요소하나씩, 순서){})

arr2.forEach(function(arg,idx){ //데이타값, 순서
  console.log(arg,arr2[idx]);
});

//for(임의변수 in 객체){}
var obj ={'a':'1','b':'2','c':'3' };

for(var k in obj){
  console.log( obj[k]);
}
//===================================================

var an= [1,3,4];
var na= [1,3,4];
console.log( an === na); //false

var n = 5;
var u = 5;
console.log( n === u);//true

for(var l=0;l<3; l+=1){
  console.log( an[l] === na[l]);
}

var nna = na;
console.log(nna === na);

//주소를 참조하면 얕은 복사
//값자체를 복사하면 깊은복사

