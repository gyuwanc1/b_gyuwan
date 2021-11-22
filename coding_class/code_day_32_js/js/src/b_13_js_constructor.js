//b_13 js constructor.js
'use strict'; //엄격하게 기능을 제한하여 처리하는 모드

// var user = {};
// user.name = 'xido';
// user.age = 20
// user.email= 'ido@naver.com';
// console.log (user);

var UserSetting = function(userName, userAge, userEmail){
  this.name =userName;
  this.age=userAge;
  this.email=userEmail;
  // group2='별도의 세팅값';
};

// console.log(this);

var user1 = new UserSetting('xido',30,'xido@gmail.com'); //기존에 만든 함수의 기능을 복제 --객체로 변환 (new 연산) --인스턴스처리
console.log( user1.email);

var user2 = new UserSetting('puppy',10);
console.log(user2.email);

//prototype:생성자에 담길 내용에 대한 별도의 처리되는 기본 값
UserSetting.prototype.group='가족명단체크';
console.log(user1.group2);

UserSetting.prototype.trueCheck = function(){
  return this.age / 2; 
};

console.log(user1.trueCheck());

console.clear();
// this:window
console.log(this);
//this:객체이흠
var ObjFn = function(a) {
  this.alpha =a;
};

var alpha = new ObjFn('abcd');
console.log(alpha.alpha);

//========================================================================

var SetMenu = function(brand, type, narr, link){
  this.brand = brand;
  this.type = type;
  this.narr = narr;
  this.link=link;
};


SetMenu.prototype.title = '겨울에 어울리는 음료';

var coffeelist = [];

var drink1 = new SetMenu('nesspresso', 'coffee', '겨울에 따뜻하게 마실 수 있는 커피', 'http://nesspresso.com');

// coffeelist.push(drink1);
// console.log( drink1.title );
// console.log( coffeeList[0].title );

// -------------------------------------------
var ul = document.querySelector('ul');
var list = ul.children;
console.log( list );



// prototype은 재설정, 추가 옵션을 주는 개념
// 배열이 가지고있는 본연의 기능 중 값을 배열형식으로 처리하는 것
var listArr = Array.prototype.slice.apply(list);
console.log( listArr );

listArr.forEach(function(data, index){
  data.style.border = '1px solid #3df';
});


//prototype은 재설정, 추가옵션을 주는 개념
//prototypr은 하나의 시능을 사용 할 수 있는 환경을 구축하는 처리형태
//사용하는 변수 값 자체에 있는 기능은 아니고, 본여느이 타입형태에 담겨 처리 할수 있도록 만드는 것

//===================================================================================================\

/* 배열형식을 가진 기능이 실제 배열이 아닌 형태는 유사베열로 불리고, 이는 배열의 고유기능을 처리하지 못한다.(배열메소드 기능)
그렇기에 강제로 배열로 처리하기 위해서는 배열의 고유기능을 처리해주어야 하는데 이때 필요한 형식이 prototype이다.(고유기능을 이용하여 강제수행)
이처럼 본래 가지고 있지 않는 형식을 강제로 수행하기 위해서는 어떠한 설정을 주어야 하는데
이를 prototpㄷ에 내장시켜 처리 하도록 만든다.*/

//생성자 함수
//this
//배열/유사배열
//prototype

// 배열 메소드
var arr = [];
arr.push(1)
// console.log(  arr  );
// console.log( arr.unshift('data')  );

// arr = Array.prototype.push(1);
// Array.prototype.unshift('data');

var ListFn = function(type, color){
  this.type = type;
  this.color = color;
};
ListFn.prototype.store = 'anyang';

var coffee = new ListFn('americano', 'brown');
console.log( coffee.store );

// -----------------------------------------

console.clear();



var n = 0 ;
var addFn = function(){
  //'use strict'; 모드를 사용하면, 일반함수내의 this는 undefined를 가르킨다.
  // this.n = 50;
  n = 50;
  n++;
}

addFn();

console.log(n);
console.log(window.n);

//-----------------------------------------
var lastName = 'kim';
var firstName = 'xixixixi';


var useFile = {
  firstName:'xido',
  lastName : 'lee',
  job : 'designer',
  subJob : 'developer',
  fullName : function(){
    return this.lastName + ' ' + this.firstName;
  }
};

console.log( useFile.fullName());

//========================================================
// call, apply, bind
//new Array() === []

var ar1 = [1,2];
ar1.push('바나나', '키위');

//Array, Object, Function
Array.prototype.push.call(ar1, '오렌지','수박'); 

console.log(ar1);

//=======================================================

var obj = {
  string:'sido',
  reName : function(){
    console.log('name:', this.string);
  }
};
obj.reName();

var obj2 = {
  string : 'sub name'
};

console.log ( obj2.string);
obj.reName.call(obj2);

//=========================================================

var listFn = function(){
  //return Array.prototype.join.call(aruments).splite(',');
  return Array.prototype.slice.call(arguments);
};

var makeList = listFn('test', 'file',1,2,5,7,10);
console.log(makeList);

//1.this: window
//2.this : 생성자 함수로 만들어진 객체
//3. this : function(){} - window 이지만, 엄격한 모드 ('use strict')로 전환시 undefined
//4.this : 메서드 처리
//5.this :  이벤트핸들러 - 이벤트의 주체가 되는 선택자

//===========================================================

var btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  console.log(this);
}); //#btn = this

console.clear();

//=================================================================

var objBox = {
  penname : 'board maker',
  rename : function(){
    console.log(this.penname);
  }
};


var obj1 = { penname : ['sharp','magic']};
objBox.rename.call(obj1); 
objBox.rename.apply(obj1);

console.clear();
//===========================================================================

var Phone = function(brand, product){
  this.brand =brand;
  this.product =  product; 
  };

  Phone.prototype.set = function(version,year){
    console.log(this.brand, this.product,version,year);
  };

  var brand = 'apple';
  var product = 'iphone';

var br1 = new Phone ('samsung', 'gallaxy');
console.log(br1);
br1.set('s21', 2021);
br1.set.call (this, 's21',2021); //call은 value담기
br1.set.apply(this,['s21',2021]); //apply는 array담기
var reset = br1.set.bind(this, 's21', 2021) //bind
reset();

//1.this: window
//2.this : 생성자 함수로 만들어진 객체
//3. this : function(){} - window 이지만, 엄격한 모드 ('use strict')로 전환시 undefined
//4.this : 메서드 처리
//5.this :  이벤트핸들러 - 이벤트의 주체가 되는 선택자
