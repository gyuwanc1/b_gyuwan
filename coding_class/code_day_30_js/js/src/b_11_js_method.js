//b_11_js_method.js

//배열 메소드는 배열형식을 이용하여 처리하는 다양한 기능을 가진 함수
//일부는 배열메소드가 아닌 것도 존재(property, 다른곳에서도 사용가능한 범용)

// var array = ['maker','remote','pen'];
// console.log(array.length);

var text = 'javascript';
console.log(text.length);

var obj = {'maker':'dog','dogdog':'duck'};
console.log(obj.length);

console.log(Object.keys(obj).length);

//=================================================

console.clear();
var array = ['maker','remote','pen'];

array.push('mouse');
array.unshift('moniter');
console.log(array);
array.shift();
array.pop();
console.log(array);

var joinText = array.join ('');
console.log(joinText);

var spliteText = joinText.split('');
console.log(spliteText);

array.forEach(function(d,i){
  console.log(d);
});

spliteText.reverse();//배열의 목록을 뒤집기!!
console.log(spliteText);

spliteText.sort(); //배열의 목록울  순서대로 재배치!!
console.log(spliteText);

var indexCk = array.indexOf('mug'); //indexof 내부에 값을 입력하여, 동일한 값이 존재하면, 그중 첫번째가 위치한것을 파악하여 위치숫자를 표기
//존재하지 않는 다면 -1; 
console.log(indexCk);

var replaceArr = array.splice(1,0,'cam','mug','charger');
console.log(array); //중간삽입 