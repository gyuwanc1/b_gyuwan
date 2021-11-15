//b_04_nesting_onject.js

var arr =[]; // 참조변수 원본의 데이터는 따로두고 그값을 공유하여 체크
var ck = (arr.constructor === Array) ? 'array' : 'other'
console.log( typeof arr, ck);

// var arr2 = new Array();
// console.log(arr2);

arr = ['과일', '고기', '깐풍기', '회', '냉면'];
var arr3 = ['냉면','라면','우동','회냉면','쫄면','밀면','야끼우동','국수']
console.log(arr[2]);

var arr2 = ['포도', '사과', '배', '감', '귤', '자몽']

var arrList = [arr, arr2, '회', arr3 ];

// [
//   ['과일','고기', '깐풍기', '회', '냉면'],
//   ['포도','사과','배','감','귤','자몽']
// '회'
//['냉면','라면','우동','회냉면','쫄면','밀면','야끼우동','국수']  
// ]
// console.log((arrList[0])[2]);

console.log(arrList[2], arrList[0][3]); //회찾기
console.log(arrList[0][4], arrList[3][0]); //냉면찾기

var phone = '010-5548-7896';
var addr = '서울시 영등포구 여의도동 kbs홀 본관 402호';
var myArr = phone.split('-');
var myAddr = addr.split(' ');
console.log(myArr.join('.'), myAddr);

//=========================================================================

console.clear();

var obj = {};
var objCk = (obj.constructor === Object)? '객체' : 'other';
console.log(typeof obj, objCk);

// var objOrigin = new Object(); //원형의 형태를 복제한다는 의미
// console.log(objOrigin);

obj = {"meat":"채끝살", "fruit":"머루포도", "국수":"쫄면", "mobile phone":"samsung" };
//.box { width:100%, margin:auto;}

console.log(obj.fruit);
console.log(obj["mobile phone"]);

var obj2 = {"web":"frontend","myObj":obj};

/*
{
  "web":"frontend",
  {"meat":"채끝살", "fruit":"머루포도", "국수":"쫄면", "mobile phone":"samsung" }
}
*/


console.log(obj2.myObj.meat);   //객체 에서 프로퍼티 값을 불러오기 위해서 [""]사용 가능


//===================================================
console.clear();

var drink= [
  {'coffee':['esspresso','americano','latte','mocha','choco latte']},
  {'alcohol':['맥주', '소주','막걸리','청주','데낄라']}, 
  {'juice':['오렌지', '포도','자몽', '망고']}, 
  {'tea':['black first', 'green', 'red', 'lemon', 'elgray', 'pepermint']}, 
  {'ade':['자몽','키위', '레몬']}  
];

console.log(drink[3].tea[5]); //pepermint

//==============================================================================
var data = {};

var mySet = {
  name : function(d){
    return data.user = d; 
  },
  old : function(d){
    return data.old = d;
  },
  gender : function(d){
    return data.gender = d;

  }
}

console.log (data);

mySet.name('xido');
console.log (data);

mySet.old (20);
console.log(data);

mySet.gender('male');
console.log (data);
//--------------------------------------------------------------------

//반복수행( property 안에 data ) 객체(data)내부에 있는 property
for(sam in data){
  console.log(sam + ':' + data[sam]);
}

