//b_09_js_copy.js

var favoritColor = ['red', 'coral', 'violet', 'brown', 'gray'];
var copyColor = favoritColor; //같은 주소지 공유
favoritColor.push('yellow');

// console.log(favoritColor, copyColor);

console.clear();


var cloneColor = [];
//cloneColor와 favoritColor의 값이 동일하게 만들고,
//이후에 favotirColor.push('sky'),cloneColor('deep orange');

// var arr = ['one'] //참조변수는 값을 공유할때 주소를 공유한다
// var arr2 = [];
// //arr2[0] = arr[0];
// arr2.push(arr[0]);
// arr.push('two');

// console.log(arr, arr2);

var i =0;
var len = favoritColor.length;
for(;i< len; i+=1){
  cloneColor.push(favoritColor[i])
}
favoritColor.push('sky');
cloneColor.push('deep orange');
console.log(favoritColor, cloneColor);

//=======================================================
console.clear();

var pc = {
  'dell' : '프리시전',
  'hp' : 'z시리즈',
  'apple' : 'mac book',
  'samsung' : 'galaxy book'
};

var copyPc = pc;
pc.lg = 'gear';
console.log( copyPc);

var clonePc = {};

//==========================================================

console.clear();

var pc = {
  'dell' : '프리시전',
  'hp' : 'z시리즈',
  'apple' : 'mac book',
  'samsung' : 'galaxy book'
};

var clonePc = {
  'dell' : '프리시전',
  'hp' : 'z시리즈',
  'apple' : 'mac book',
  'samsung' : 'galaxy book'
};

pc.asus = 'gen book';
clonePc.lenovo = 'think pad';

console.log(pc, clonePc);

//==================================================================
console.clear();

//var cookie = ['초코칩', '칙촉','빼빼로','촉촉한초코칩;,'칸쵸','홈런볼','엄마손']
//var snack = {'농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도'}
// var ice = [{'롯데':['폴라포','수박바']},{'해태':'브라보'}, {'허쉬':'민트초코'}, {'빙그레':'투게더'}]

var cookie = ['초코칩', '칙촉','빼빼로','촉촉한초코칩','칸쵸','홈런볼','엄마손']
var basket=[];

var b = 0;
var leng = cookie.length;

for(; b<leng ; b+=1){
  basket.push(cookie[b]);
}
console.log(basket);

//=====================================================================


var snack = {'농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도'}
var wood={}

for(var d in snack) {  
  wood[d]=snack[d]
}
console.log(wood);

//=========================================================================================

/* 1번째 풀이------------
tong.push(ice[0]);
tong.push(ice[1]);
tong.push(ice[2]);
tong.push(ice[3]);

console.log(tong);
---------------------*/
// var ice = [{'롯데':['폴라포','수박바']},{'해태':'브라보'}, {'허쉬':'민트초코'}, {'빙그레':'투게더'}]
// var tong = []

/* 2번째 풀이*/

// ice.forEach(function(data,index){
//   tong[index] = data;
// });

// ice[0]['롯데'].push('메로나');

// console.log(tong) 
//
//ice.'롯데'=['폴라포','수박바']
/*for (){  
  var ice2={}
  for (var idata in ice){
    ice2[idata]=ice[idata]
  }
}
tong.push(ice2);
??
*/


// console.clear();
// //================
var ice = [{'롯데':['폴라포','수박바']},{'해태':'브라보'}, {'허쉬':'민트초코'}, {'빙그레':'투게더'}];

var textAr = JSON.stringify(ice);
var tong = JSON.parse(textAr);

console.log(tong);
