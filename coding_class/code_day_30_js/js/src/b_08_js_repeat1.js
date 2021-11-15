//b_08_js_repeat1.js

//while(){}------------------------------------------------
/*
var i = 0;  // 1.최초
while( i < 10){ // 2. 조건비교 (참이면 수행 거짓이면 끝)
  console.log(i);
  i +=1; //3. 변수연산 후 2번으로 이동
};
*/

//do-while -------------최초의값 실행 후 비교
var j = 10;
do{
  console.log (j);
  j+=1;
} while (j < 5)
//-------------------------------------------------------------

//for(){}-----------------
// var y = 0; //1 최초값
// for(;y<20;){ //수행
//   console.log('y:', y);
//   y +=2; //연산
// }

var y =0;
for(; y < 5 ; y +=1){  // for(최초; 조건//연산)
  console.log('y:',y);
}
console.log (y);

console.clear();
//문제: 2021년을 기준으로 과거 50변을 모두 도출

var yy =2021;
var xx ='년';
var ul = document.querySelector('.test');
var li;
for (; yy>= 1971; yy -=1){
  // console.log(yy+xx);
  //document.write(yy+xx);

  li= document.createElement('li');
  li.innerText = yy+xx 
  ul.append(li);


}

//생성자함수를 사용하는 방법
//1.첫글자가 대문자
//2.생성자 그대로 사용하는 것이아닌 해당하는 함수를 복제하여 사용 'new'연산자를 붙여서 사용
//3.함수중에 기존에 존재하는 함수를 내장함수 라고 불리우며, 생성자함수도 내장되어있는 기능이 있다.

//날짜와 관련된 함수 Date();
// var date = new Date();
// console.log(date.getFullYear());

//요소를 생성하는 방법
//1.document.create (요소이름);
//2.생성된요소에 기능 첨부
//3.생선된요소를 선택된 요소에 담기:append()

//var  변수를 한번에 작성 선정 해주고 함수를 사용한다.
//함수 표현식에서는 그렇게 하면 호이스팅 현상을 확인 관찰 가능