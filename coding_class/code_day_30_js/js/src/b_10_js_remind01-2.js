//b_10_js_remind_01-2.js

// console.log(i);

var ar1 = ['딸기','포도','바나나','오렌지'];
var cAr = [];

var arFn=function(arr){
  
  var arEx=[];
  arr.forEach(function(data,index){
    arEx[index] = data;
  });
  return arEx;
};
cAr = arFn(ar1);

ar1.push('melon');
console.log(ar1);
console.log(cAr);


var car = ['pony', 'bmw', 'granger', 'audi'];
var car2 = arFn(car);
console.log( car2);

console.clear();

//===============================================================



/*
var obt = {'a':1, 'b':2};
var cObt = {};
for( var prop in obt ) {
  cObt[prop] = obt[prop];
}
obt.c = 3;
console.log(obt,cObt);
*/
var ob1 = {
  'fruits': ['딸기','포도','바나나','오렌지'],
  'drink':'coffee'
};
var cOb1 = {};

/*
for( var prop in ob1 ){
  //ob1에 대한 객체를 체크하여 copy
  //Array.isArray(ob1[prop]) : 배열의 내용이 맞는지 파악
  //ob1[prop].constructor === 'Array' ->배열의 내용이 맞는지 파악
  
    if(ob1[prop].constructor === Array){      
    //ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
    ob1[prop].forEach(function(data,index){
      cOb1[prop] = [];
      cOb1[prop][index] = data
    });
  }else{
    //ob1에 대한 객체를 체크하여 copy
    cOb1[prop]= ob1[prop];
  }  
}

ob1.car = 'niro';
ob1.fruits.push('melon');
console.log(cOb1);
*/

var roopFn = function(){
  for(var prop in ob1){ //객체 반봅
    if(ob1[prop].constructor === Array ){//객체의 값이 배열여부확인
      cOb1[prop] = arFn(ob1[prop]);// 배열값 copy처리 함수 호출
    }else{//객체의 값이 배열이 아닌경우 처리
      cOb1[prop] = ob1[prop];
    }  
  }
}


ob1.car = 'niro';
ob1.fruits.push('melon');
console.log(cOb1);

//------------------------------------------------------------------------------------------
console.clear();

// JSON파싱========================================================================
var originAr = {
  'fruits': ['딸기','포도','바나나','오렌지'],
  'drink':'coffee'
}; //------json형식

var textAr = JSON.stringify(originAr); //JSON형식을 보이는 그대로 문자화 처리
var copyAr = JSON.parse(textAr); //JSON(객체/배열)로 변환

originAr.more = '추가객체 삽입';
originAr.fruits.push('감');

console.log( copyAr);
document.write(originAr);

//JSON(JavaScript Object Notation )
//1.property, value 모두 쌍따옴표로 처리한다.
//2.주석은 사용X
//3.객체와 배열들의 집합


