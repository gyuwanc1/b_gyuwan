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
var i =0;
var setFn = function(selector){
  var userStep = [];
  var storeSelectFn = function (selector){
    switch(selector) {
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
  //  console.log(userStep); 
  return userStep; 
};
// setFn('a');


//----------------------------------------------------
var storeFn = function(selector, user){
  var userCheck = {name:'사용자', content:[]};
  var userStep = [];
  //------------------------------
userStep = setFn (selector);
  
  //------------------------------

  i +=1;
  userCheck.name = user || 'noNameUser_' + i ;
  userCheck.content = userStep;
  storeList.push(userCheck);  
  return userCheck;
};

console.log(storeFn('a'));
console.log(storeFn('b','user2'));
console.log(storeFn('c'));
console.log(storeFn('d','user4'));
console.log(storeList);
