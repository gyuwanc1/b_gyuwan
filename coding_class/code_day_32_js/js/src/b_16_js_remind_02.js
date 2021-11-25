//b_16_js_remind_02_js

//일반변수 와 참조변수

//일반변수는 값 그자체를 가르키는 것
var i = 0;
var n = i;
    i =10;
    n=i;
    i='text';
    console.log(i,n);

//참조변수는 값이아닌 주소를 가르키는 것 - 대표적 참조변수 [], {}

var arr =['하나','둘'];
var arr2 = arr;
    arr[0] = '셋'
    arr[1] = '넷'
console.log( arr,arr2);

//위와 동일한 참수변수 인것 같지만 실제로는 새로운 참조변수를 생성

//=======================================================================

 //변수는 호이스팅이 됨  하지만 함수는 끌어올리지 못함  단, 함수선언식으로 작성하면 호이스팅 현상 일어남


//=======================================================================
console.clear();

var arrNumber = [90,5,30,60,450,250,3,60,8];


//문제1: 위 배열에 들어가는 값중 가장 작은수를 구하는 방법 2가지 이상을 찾아내시오.

// 1-1 : Math.min()

// Array.prototype.call(?, 1,2,3,4), 
// Array.prototype.apply(?, [1,2,3,4,5]);
// var minResult = Math.min.apply(null, arrNumber); 
// console.log( minResult );

// 1-2 : 
// var arrR2 =  [1,4,6,2,99,10,456,98765].sort(function(a,b){
//     return a - b;
// });
// console.log( arrR2 );
var arrNumber2 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMin = arrNumber2.sort(function(a, b){ return a - b; });
    console.log( sortMin[0] );    

    // 배열의내용을.정렬로처리( 정렬기준을 설정(앞의값, 뒤의값){} ) 
    //arrNumber2.sort(function(a, b){ 
      // 앞의값 - 뒤의값을 계산하여 결과가 음수이면 앞,뒤 그대로배치
      // 앞의값 - 뒤의값을 계산하여 결과가 양수이면 뒤,앞 순서로배치
      //  var c =  a - b;
      // 정렬기준을 처리하여 반환
      //  return c; 
    //});

// 1-3 : for문 이용
var arrNumber4 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var arr4Len = arrNumber4.length;
var minNumber = arrNumber4[0];
for(i=0; i<arr4Len; i+=1){
  if(minNumber > arrNumber4[i]){
    minNumber =  arrNumber4[i];
  }
}
console.log('for:', minNumber );


var min = arrNumber[0];
 for(var i = 0; i<arrNumber.length;i++){
   if(arrNumber[i] < min){
     min=arrNumber[i];
   }
 }
 console.log(min);

 //1-2



//문제2:위 배열에 들어가는 값중 가장 큰수를 구하는 방법 2가지 이상을 찾아내시오.

var max = arrNumber[0];
 for(var i = 0; i<arrNumber.length;i++){
   if(arrNumber[i] > max){
     max=arrNumber[i];
   }
 }
 console.log(max);

// 2-1 : Math.max()
var maxResult = Math.max.apply(null, arrNumber); 
// console.log( maxResult );

// 2-2 : [].sort()
var arrNumber3 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMax = arrNumber3.sort(function(a, b){ return b - a; });
console.log( sortMax[0] );
var last = sortMin.length - 1;
console.log( sortMin[last] );


//문제3: 위배열에 들어가는 값 대신 정수형의 1~3자리 까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출

var arrArray=[];

for (var i = 0; i<10; i++){
  arrArray.push(Math.floor(Math.random()*1000));
}
console.log(arrArray)

// 문제 3-1번
var arrRan = [];
var random; //= Math.floor(Math.random() * 1000);
var i=0;
for(; i<10; i++){
  random = Math.floor(Math.random() * 1000);
  arrRan.push( random );
}
//=============================================================================================
console.clear();
//구구단

// for(i=2;i<=9; i++){
//   for( h=1;h<=9;h++){
//     console.log(i +'*'+ h+'='+ i*h  )
//   }
// }

// var loop1 = function(i){
//   var n;
//   for( n=1;n<=9;n++){
//          console.log(i +'*'+ n+'='+ i*n  )
//          loop1(i);
//        }
// };
// loop1(i=1);

//========================================================================

// 500 -> 250  
// 0.1초마다 1씩 빠지는 숫자를 카운팅
// setInterval : 일정시간마다 조건이되면, 끊어주어야한다. : clearInterval
// setTimeout  : 정해진 시간 뒤에 1회성

// 1: 
// 0.1초 : 100
var startNum = 500;
var timed    = 10;
var endNum   = 250;
var intervalFn;
// ---------
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p>span');
pSpan.innerText = 'text작성';
var goCheck = true;
// ---------- 
// var countFn = function(start){
//   var start = start;

//   if(goCheck){
//     goCheck = false;

//     intervalFn = setInterval(function(){
//       pSpan.innerText = start;
//         start -= 1;
//         if(start <= endNum){
//           pSpan.innerText = endNum + '처리 완료';
//           clearInterval(intervalFn);
//           goCheck = true;
//         }
//     }, timed);
//   }
// };

// btn.addEventListener('click', function(e){
//   e.preventDefault();
//   countFn(startNum);
// });
//==============================================================

var intervalCountFn = function(startNum){
  var countNum = startNum;
    setTimeout(function(){
      pSpan.innerText = countNum;
      countNum -= 1;
      if(countNum > endNum){
        intervalCountFn(countNum);
      }else{
        pSpan.innerText = countNum + ' 숫자 달성!!!';
      }
    }, timed);
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  intervalCountFn(startNum);
});