//b_02.js_data_type.js

//형타입을 파악하는 함수 :  typeof(literal)
//parseInt (변수) :숫자로보이는 문자 ('1')를 강제로 숫자형타입으로 변환하는 함수
//parseFloat(변수) : 소수점 까지 변환
//Number(변수) :




//숫자(number)
var num = 7;
var num2 = num;
    num = 10;

console.log( num, typeof(num) );
console.log( num2, typeof(num2) );

//문자
var str = '123';
var str2 = str;
    str = '문자';
  
console.log( str, typeof(str) );
console.log( str2, typeof(str2) );

var str3 = str2 + 567;
console.log( str3 );
var str4 = parseInt(str2) + 567;  //문자 + 문자=문자, 문자 +숫자 = 문자, but 숫자 + 숫자=숫자, *parseInt 는 강제로 숫자 변환
console.log( str4 );


console.log( typeof('50.4%') );
console.log( parseInt('50.4%') ); //첫글자부터 시작해서 (정수)숫자로 변환가능한 것까지만 숫자화처리 첫글자가  무조건 숫자로 시작
console.log( parseFloat('50.4%') ); //첫글자부터 시작해서  (실수)소수점이 있더라도 모두 숫자로 변환 가능 무조건 숫자로 시작
console.log( Number('50.4%') );// 문자든 숫자든 관계없이 모두 숫자로 변환처리 

var nan = NaN; //Not a Number 
console.log (nan,typeof(nan));

//Math 함수 
var n = 5.54;
console.log( '올림처리', Math.ceil(n));
console.log( '내림처리', Math.floor(n));
console.log( '반올림처리', Math.round(n));
console.log( '0~1까지의 난수', parseInt(Math.random() * 64));
console.log( '절대값', Math.abs(-n) );//절대값


//논리
//논리형은 결과를 true/false로 확인하여 처리하지만, 그결과를 확인하는 검증이 매우 많다.
//! ->반대,  === ->형타입까지 일치하는가? ...
var bool = true; // '' 사용하지 않음
console.log(bool,typeof(bool));

console.log(!!n); //존재하는 값에 !를 붙이면 값이 없다는 의미 ->있느냐 없느냐 판단용도  0은 없다고 시작.

//undefined
var und = undefined;
console.log( und, typeof(und));
und = undefined + '문자'; //값+문자 = 문자
console.log (und, typeof(und));

//null
var nul = null;
console.log(nul, typeof(nul));
//null은 undefined와 null은 값이 없다는 의미의 특수한 형타임으로 있던 자료구조였으나
//현재는 단순히 값이 누락되어진다라는 의미로만 존재

//object/function 형타입은 단순 한다지의 개념을 가지고 있는 것이 아니고, 여러 형타입을 담은 복합성을 띈다.
//그렇기에 object/function 형타입으로 사용한 변수처리는 참조 변수 개념으로 처리
//일반변수 = 단순값을가지는 변수 / 참조변수 = 값을 가지는 변수가 아니라 어느공간 (주소)을 공유하는 변수

// 일반변수-사과 - 1일 1개인 경우 내가 직접 들고있으면 되지만, 
// 참조변수-사과창고 - 양이 늘어나면 별도의 공간에 담아야 하는 것과 같이 해당공간을 공유한다.
//js는 순서를 첫번째가 0부터 시작.
/*-------------------------------------------------------*/

//object


//1.array---------------------------------------------
var arr = ['시계', '맥북', '테블릿', 'TV']; // <-------참조변수
console.log(arr.constructor === Array);
console.log(typeof(arr));
console.log(arr[3]);

arr[2]='마이크';
console.log( arr[2], arr[9]);


var arr2=arr;
console.log(arr2);
arr[9]=undefined;
console.log(arr);
console.log(arr2);



var arT = new Array();
console.log(arT);
arT[0]="물";
arT[1]="약";
console.log(arT);
//new Array()를 이용하여 배여을 생성하는 방식은 권장하지 않는다. ->[]바로 작성후 바로수행

var arA = [];
arA[0] ="물";
arA[1] ="약";
console.log(arA);

arA.push('카피');//뒤에 넣기
arA.push('쥬스');
arA.push('밥');
arA.unshift('5'); //앞에끼워넣기
console.log(arA);

arA.pop(); //뒤에꺼 제거
arA.shift();//앞에꺼 제거
console.log(arA);

//============================================================

//2. object

var obj = {};
// var bojT = new Object();
console.log( obj, typeof(obj) );
console.log( obj.constructor === Object );

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = 'pixel';
obj['농심'] = '너구리';
obj['오뚜기'] = '진라면';
obj['한국 야쿠르트']='건국우유'; //영문이 아닐경우 . 제거 []안에 사용

console.log(obj);
console.log(obj.google); //.googled의 값을 나타낸다.

var obj2 = {};
obj2[0] = "마이크";
obj2[1] = 'pen';
obj2[2] = '텀블러';
console.log( obj2);

console.clear();
//-------------------------------------------------------

//function

var fn = function(a){
  //a는 매개변수(parameter) ,인수/인자(argument)
  //return 마지막에 작성하는 것으로, 어쩃든간에 최종결론은? 답을 도출하는 역활
  return 1 + a;
};

console.log( fn(5) );

var fn2 = function (a,b){
  var c=a+b;   
  return c;
}

console.log ( fn2(1,6));

var d= 1+6;
console.log(d);

console.log (fn2(4,50));
console.log (fn2(4,80));
console.log (fn2(44,50));
console.log (fn2(41,4));

//함수의 기본형태 : function(){} <- 이름이 없는 함수 익명함수
//함수 선언식 : 이름을 부여한다 -> 기명함수 : fuction 이름 () {} 
// 함수 표현식:
// 이름 부여하지 않는다 -> 익명함수 -> 이름이 없기에 대신 이름을 할당할 수 있는 무언가를 선언(변수선언) : var 변수명 = function () {}

//함수 선언식
console.log (fn3());
function fn3() {
  return 'test';
}
console.log (fn3());  //호이스팅 현상 주의

//함수 표현식
var fn4 = function(){
  return 'test2';
}
console.log( fn4() );

//----------------------------------------------------------------------
console.clear();

var x='hero'; // 광범위한 범위를 가지고 있다. 전역변수
function ckFn() {
  var y='xido'; //y의 사용범위는 fuction ckFn()내부에서만 동작 가능
  console.log (x,y);
  return y;
}
//1. console.log (x);// 결과물 :hero
//2. ckFn();//콘솔? 결과물 hero xido, 반환된 값:xido
//3. var rel = ckFn(); console.log ( rel);
//4.console.log(y); //콘솔의 결과: 

function ckFn2(){
  var x ='who?';
  console.log ();
  // return x;
}

console.log (x);
ckFn2();
console.log(x);

//--------------------------------------------

// function ff(){}
// ff()

// (function(){})() // 즉시실행함수 : 익명함수의 기다림 없이 바로 실행
// (function(){}()) // 즉시실행함수 : 익명함수의 기다림 없이 바로 실행

console.clear ();