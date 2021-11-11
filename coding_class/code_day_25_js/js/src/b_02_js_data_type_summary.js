
// console.clear();

//형타입! 
//1. 숫자 -> 값을 더하면 계산이 된다
//2. 문자 ->값을 더하면 연결되어 보여진다., 내가 작성할때 ''안에 내용을 작성한다.
//3. 논리 -> 내용을  (!==, ===) 비교하여 맞으면 true 아니면 false를 도출
//4. undefined -> 존재는 하는 녀석인데 값은 없음
//5. null ->? 패스~~~~~~~
//6. 객체>배열/객체 -> 모르겠고 그냥 배열과/객체로 분리
//6-1 배열 -> 상세내용없이 오로지 목록만 []안에 나열
//6-2 객체 -> object 무엇에는 무엇이 있다.  (속성명:값)으로 존재하는 정의된 내용을 {}내부에 나열
//7. 함수 -> 선언식? 표현식?즉시실행?...function(){} 이렇게 생겼고, 이를 호출 하기 위해 이름이 필요
//7-1 함수에 이름을 다는 방법은 변수명에 function(){}으로 처리
//7-2 함수에 return이라는게 있는데 최종 결론도출 
//8. 스코프 (범위): 변수가 사용할 수 있는 범위- 전역/지역


var a ='2021년';
var b ='11월';
var c = '04일';
var dot = '.';
var date;
  date = parseInt(a) + dot + parseInt(b) + dot + '0' + parseInt(c);
console.log(date)
//----------------------------------------------------//

console.clear();

var user = function(a){ 
  var i = '님 오늘도 고생하셨어요!'
  return a+i
};
console.log(user('xido'));

// 1. xx님 오늘도 고생하셨어요!
//2. xx님 힘내세요. 
//3. xx님 내일도 또 다시 !!!

var ran = parseInt(Math .random() * 7); //0~7

var arrSample = [1, 5, 'apple', 'banana', 'graph', 'kwiw', 'car']

console.log( ran, arrSample[ran]);

console.clear ();

var content=['오늘도 고생하셨어요',
'힘내세요',
'내일 또 다시'];

// var content2 =[];
// content2[0] ='힘내세요';
// content2.push('내일 또 다시');
// content2.unshift ('오늘도 고생하셨어요');

// console.log(content2);

var userFn = function(data){
  var random = Math.random() * 3;
  var  int =  parseInt(random);
  var plusText =data + '님' + ' ' +content[int];
  return plusText;
}

var userRel = userFn('me');

console.log ( userRel);

//js에서 id 명을 선택하는 방법

// 1.document.getElementById(id이름);
// 2.document.querySelector(css와 동일한 선택자);

// 요소 생성하는 방법
// document.createelement (요소명); <- 생성해서 어딘가에 넣을 준비를 해라
// 선택자.innerHtml = '요소'; <- 어딘가에 넣겠다. 기존선택자 내부에 존재하는것 삭제
// 선택자.append(요소) <-선택자 내부 뒤에 요소를 삽입 (단, .text형태는 글자로 삽입)


var wrap = document.getElementById('wrap');
var p = document.createElement ('p');
p.innerText = userRel;
wrap.append(p);


console.clear();

//...................................................................

var variable = '이것은 변수입니다.';

document.write(variable);

var arA = [];
arA[0] ="물";
arA[1] ="약";
console.log(arA[0]);

var fnCall = function(){
  console.log('game Go');
};
fnCall();

var fnCall2 = function(){
  return 'this';
};
fnCall2();

//변수, 함수//------------------------------------------------------------

// sum(a,b); //덧셈 a+b=값
// Mul(a,b); //뺼셈 a * b=값
// devide(a,b); //나누기 a/b=값 ->정수값만
// minus(a,b); //곱셈 a-b=값
// svg(a,b); //평균 a*b/2=값 
// remainder(a,b);// 나머지 값 a % b = 값
// // + - * / %
console.clear;



var sum = function (a,b){
  var c=a+b;   
  return a+'+'+b+'='+ c;
}
console.log(sum(1,2));
//--------------------------------

var minus = function (a,b){
  var c=a-b;
  return a+'-'+b+'='+ c;
}
console.log(minus(2,1));
//--------------------------------

var mul = function (a,b){
  var c= a*b;
  return a + ' * ' + b + '='+c;
}
console.log (mul(4,2));
//--------------------------------

var divide = function(a,b){
  var c= a/b;
  return a + ' / ' + b + '='+c;
}
console.log(divide(4,2));

//--------------------------------

var svg = function (a,b){
  var c= a+b/2
  return a + ' * ' + b +'/'+ '2'+'='+c;
}
console.log(svg(4,2));

//--------------------------------

var remainder = function (a,b){
  var c= a % b
  return a + ' % ' + b + '='+'2'+'...'+c;
}
console.log(remainder(5,2));
//--------------------------------


var dic2 =[sum(1,2),minus(2,1),mul(4,2),divide(4,2),svg(4,2),remainder(5,2)]

var dic = dic2

console.log(dic);




