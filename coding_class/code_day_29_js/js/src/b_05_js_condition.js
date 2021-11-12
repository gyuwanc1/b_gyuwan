// b_05_js condition.js

console.clear();

var rel = true; //rel의 조건의 값은 참

// switch (/*매개변수*/){
//   case /*조건값*/: 
//   //조건값과 매개변수가 일치하면 수행하는 부분
//   break;

//   case 조건값2:
//     //조건값과 매개변수가 일치하면 수행
//   break;
//   default:
//     //위조건들이 일치하지 않으면 수행해라 
// }; //switch문의 기본형태


var rel =true;
var d = [];
switch (rel) {
  case true:
    d.push('true1');
  break; //break는 더이상 해당조건을 수행하지 않고,switch문법을 종료하라는 기능

  case false:
    d.push('false1');
  break;
  
  default:
    d.push('end');
}
console.log(d);

var num=4;
var data=[]
var atmFn = function (num){
  switch (num) {
    case 1:
      data.push('입금');
      atmFn(2);
      break;
    case 2:
      data.push('확인');
      break;
    case 3:
      data.push('송금');
      break;
    case 4:
      data.push('통장삭제');
      break;
    default:
      data.push('대출');
  }
};
atmFn(1);
console.log(data);

console.clear();

//a.편의점에서 물건을 살경우
//1.물건을 고른다.
//2.카드를 낸다.
//3.카드 결재를 한다.
//4.물건과 카드를 돌려받는다.
//5.내역을 확인한다.

//b.편의점에서 공병을 팔경우
//1.물건을 낸다.
//2.카드를 낸다.
//3.카드입금을 받는다.
//4.카드를 돌려받는다.
//5.내역을 확인한다.

//c.편의점에서 물건을 환불
//1.물건을 건넨다.
//2.카드를 낸다.
//3.카드 입금을 받는다
//4.카드를 돌려받는다
//5.결재내역을 확인한다.

//d.편의점 결재가 안될때
//1.물건을 고른다.
//2.카드를 낸다.
//3.결재 에러발생
//4.카드 돌려받는다
//5.내역을 확인한다.

var num= 'a';
var data=[]
var atmFn = function (num){  
  switch (num) {
    case 'a':      
      data.push('물건을 살경우');      
      break;
    case 'b':
      data.push('공병을 팔경우');      
      break;
    case 'c':
      data.push('환불');      
      break;
    case 'd':
      data.push('결재가 안됨');      
      break;
    default:
      data.push('걍고');
  }
};
atmFn('a');
console.log(data);
//-----------------------------------------------------------
console.clear();

//===========================================================

var storeList = [];
var i =0; //외부에서 지속되게 처리하는 변수
var setFn = function(selector){
  var userStep = []; //return과의 값은 같지만 다른의미이다.
  var storeSelectFn = function (selector){ //함수내부에 생성후 호출->클로저  1.굳이 외부에 도출X :람다식, 2.내부기능에서 자신의 기능을 여러번 호출:재귀함수
    switch(selector) { // switch: 조건과 일치되는 기능 수행, 기본 베이스로 break작성,9상황에따라서 뺄수도 있다.)
      case 'a'://살경우
      storeSelectFn('send')    
      userStep.push('3-0')
      storeSelectFn('return')
          
      break;

      case 'b'://팔경우
      storeSelectFn('send')    
      userStep.push('3-1')
      storeSelectFn('return') 
      break;

      case 'c'://환불
      storeSelectFn('send')
      userStep.push('3-2')
      storeSelectFn('return')    
      break;

      case 'd'://안될때
      storeSelectFn('send')    
      userStep.push('3-3')
      storeSelectFn('return')    
      break;

      case 'send':
      userStep.push('1')
      userStep.push('2')
      break;

      case 'return':
      userStep.push('4')
      userStep.push('5')
      break;

      default:
        userStep.push('...');
      }
      return userStep;
    }
   storeSelectFn(selector);
   
  return userStep; 
};
// setFn('a');


//----------------------------------------------------
var storeFn = function(selector, user){
  var userCheck ={}; //{name:'사용자', content:[]};
  var userStep = []; //어떤한 값을 나열
  //------------------------------
userStep = setFn (selector);//userStep은 함수를 호출한 결과를 닫는다.
  
  //------------------------------

  i +=1; // 1씩더해라 -> streFn을 호출시 값이 1씩증가, 외부에서 지속되게 처리하는 변수 
  userCheck.name = user || 'noNameUser_' + i ; //name:사용가 이름을 작성 또는 'noName,e_방문자번호'
  userCheck.content = userStep; // 방문자가 한 행동 순서
  storeList.push(userCheck);// 전체방문자 기록 지침  
  return userCheck;
};

console.log(storeFn('a'));
console.log(storeFn('b','user2'));
console.log(storeFn('c'));
console.log(storeFn('d','user4'));
console.log(storeList);

/* JS해석하는 순서 */

// 기능을 원하는 것을 먼저 작성
// 수행되는 순서대로, 큰 틀내용대로 작성
// 세부 내용이 어떻게 처리할지, 기능위주로 들어가는것은 별첨으로 따로 작성

// 주요 목적 - 편의점에서 할수 있는 일 (물건 구매/판매/환불시 수행되는 작용 처리)
// 하나의 조건기준(다른 조건이들어가면 그에따른 첨부)
// 1. 큰 수행 순서
// 2. 큰 수행 순서
  // 2-1. 중간 작업수행
  // 2-2. 중간 작업수행  * 별도함수처리(setFn기능 별첨)
  // 2-3. 중간 작업수행
// 3. 큰 수행 순서
// 4. 큰 수행 순서
// 5. 큰 수행 순서
// 6. 큰 수행 순서

// *별첨 1 : setFn기능
// *별첨 2 : setFn기능

console.clear();

var box2 = function(){
  var list = ['1',4,5];
  return list;
}

var box1 = function () {
  var list;
  //console.log(list);
  list = box2();
  var sam = list;
  sam.push('789');
  console.log(list,sam);
}

box1();
