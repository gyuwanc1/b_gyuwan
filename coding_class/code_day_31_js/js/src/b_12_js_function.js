//b_12_js_function.js

//js에서 미리 만들어진 함수를 내장함수라고 한다.
var message = "별도의 메세지창을 띄워확인";
// alert(message);

var userOld = "나이를 입력하세요"
// var propResult= prompt(userOld);
// (propResult < 20) ? location="http://naver.com" : document.write('어서오세요');

var adultCheck = '당신은 성인이신가요?';
// var confirmCheck = confirm(adultCheck);
// (confirmCheck) ? document.write('성인이시군요') : document.write('민자임을 확인했습니다');

//--------------------------------------------------------------
//console.log();
// var console = {
//   log: function(){return arguments},
//   warn: function(){return arguments},
//   error: function(){return arguments},
//   info:function(){return arguments},
//   dir:function(){return arguments},
//   table:function(){return arguments},
//   time:function(){return arguments},
//   timeEnd:function(){return arguments},
//   group:function(){return arguments},
//   groupEnd:function(){return arguments},
// }

var arr = ['one','two','three','four','five'];
var obj = {'a':'one', 'b':'two','c':'three'};
// console.log(arr);
// console.table(arr);
// console.table(obj);  //표로 보여주기

// console.time();
// console.log(arr);
// console.timeEnd();  //시간측정

// console.clear();

//======================================================================
// Math

var random = Math.ceil(Math.random() * 10) ; // 0~1사이의 난수
console.log(random)

//parseInt() 정수로만 표현, parsFloat( 실수단위까지 표현, 숫자로 변환이 가능한 부분까지만)
//==============================
var num = 20.454545

var num2 = '50.989898vw';

var unit = '30px';

console.log(parseFloat(unit));

//=========================================================================

var sum = eval('5 + 5'); // 강제로 문자형식을 숫자로 치환하여 임의 계산까지 완수하는 형태 ()안의 문자 숫자 구별하여 연산까지 가능한 내장함수
//typescript가 나온 현시점에서는 타입의 체크에 대해 중요성이 있기에 다소 쓰기에 조금 문제가 있다.
console.log(sum);


//js에서 문자형태의 숫자는 기본연산이 된다.(단, +형태는 연결로 처리)
//문자형식의 숫자는 연산시 암묵적 변환을 거쳐서 숫자로 변환이 가능하면 처리
//변환이 가능하지 않으면 NAN을 도출
var n1 = "7";
var n2 = 'c';
var n = n2-n1; //NaN
var nRel = isNaN(n);//js에서의 is..는 참/거짓을 판단하는 함수
console.log(n, nRel); 

//=============================================================================
//URI : Uniform Resource Identifier - 인터넷 식별자 (UTF-8형식) 
//encodeURI() -> 인터넷에서 식별가능한 형태로 변환하는 함수
//변환불가능한 텍스트:A-Z,a-z,0-9,; / ? : @ & + = - _ . ! ~ * ` ( ) # 
var space = ' ';
var encodeS = encodeURI(space);
console.log(space, encodeS);

//encodeURIComponent() ->  문자형식을 모두 변환해주는 기능
//변환불가능한 텍스트:A-Z,a-z,0-9 - _ . ! ~ * ` ( )

var url = 'http://naver.com';
var encode = encodeURI(url);
console.log(encode);

//decodeURI() : encodeURI()의 복원기능
//decodeURIComponent() : encodeURIComponent()의 복원기능

var korea = 'http://대한민국.kr';
var enKorea = encodeURI(korea);
console.log(enKorea);
var deKorea = decodeURI(enKorea);
console.log(deKorea);
//---------------------------------------------------------------------------
//setInterval() -> 일정시간마다 수행
//clearInterval() -> setInterval을 강제 삭제
//setTimeout() -> 일정시간 뒤에 수행

console.clear ();

console.log('글자등장!!!');
setTimeout(function(){
  console.log('3초뒤에 등장~')
}, 3000); //일정시간 뒤에 수행하는 것

//==============================================================
// var i =0;
// var setI =setInterval (function(){
//   console.log('i',i);
//   i++;
//   if(i>20){
//     clearInterval(setI);
//   }
// },500);
//---------------------------------------------------------------------

//생성자함수- 객체의 생성시에만 호출되어 메모리 생성과 동시에 객체의 데이터를 초기화하는 역활
//instance- 추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템플렛이 실제 구현된것


var date = new Date(); //new가 붙으면 함수형태를 객체로 변환하여 사용할 수 있게
//Date함수는 날짜와 관련있는 기능
var year = date.getFullYear();
var month = date.getMonth () + 1;
var day = date.getDate();


console.log(year, month, day);
//====================================================================
/*원시함수 - 생성자함수,JS를 기본 구성하는 함수-형타입을 구성하게하는 최소한의 세팅
Number(),String(),Boolean(),Date(),Function(),Object,Array()......*/

//정의 되어진 원시함수는 직접사용이 불가능한 함수 - new를 붙이자.

/*생성자함수 - 첫글자가 대문자로 시작하는 함수,직접사용이 불가능한 함수를 객체로 변환하여 사용할 수 있도록 하는 근본이 되는 함수
원함수를 그대로 사용하는게 아닌 이를 객체로 변환하여 사용하는 함수 (첫글자 대문자)*/

//instance - 함수를 객체로 변환처리된것 ( 함수에 new를 붙여 처리하게 하는 방법)

//내장함수 - js에 있는 함수, 기본형태로 사용할 수 있도록 만들어진 함수

//변경/생성할 수 있는 함수 : 생성자 함수
//처음부터 생성된 함수는 변경이 불가 : 원시함수/내장함수

//유사배열이 존재하는 이유: li들의 요소를 단순하게 나열하여 배열로 처리하는 것이나, 객체로 모은형식

var fn = function(){};
var Fn2 = function(a, b){
  this.name = a;
  this.age = b;
  this.middle = 'lee';
};
// Fn2.prototype.middle = 'lee';

var afn = new Fn2('xido', 10);  // var afn = { name : 'xido', age:10 };
console.log( afn.name );
console.log( afn.middle );

var ul = document.getElementsByTagName('ul')[0];
var li = ul.getElementsByTagName('li'); 
var li2 = ul.children;
console.log( li, li2);

// li2.forEach(function(d){
//   console.log( 'li:', d);
// });

// 유사배열이 존재하는 이유: li들의 요소를 단순 나열하여 배열로 처리, 객체로 모은형식


