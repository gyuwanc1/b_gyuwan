//b_14_js_json_1.js

var originData =[
  {  "id": 1, "title": "Business Systems Development Analyst", "link": "https://cyberchimps.com"}, 
  {  "id": 2, "title": "Computer Systems Analyst II","link": "http://marriott.com"}, 
  {  "id": 3, "title": "Staff Accountant IV",  "link": "https://51.la"}, 
  {  "id": 4,  "title": "Developer II",  "link": "https://yale.edu"}, 
  {  "id": 5,  "title": "Financial Analyst",  "link": "https://toplist.cz"}, 
  {  "id": 6,  "title": "Statistician III",  "link": "https://woothemes.com"}, 
  {  "id": 7,  "title": "Mechanical Systems Engineer",  "link": "https://chronoengine.com"}, 
  {  "id": 8,  "title": "Statistician IV",  "link": "https://mysql.com"}, 
  {  "id": 9,  "title": "Software Test Engineer III",  "link": "https://jugem.jp"}, 
  {  "id": 10,  "title": "Web Designer IV",  "link": "http://jimdo.com"}
];

//originData copy
var textAr = JSON.stringify(originData);
var dataList =JSON.parse(textAr);

var list =dataList.forEach(function(d,i){
  console.log (i,d)
})

//document.getElementByClassName('navigation')9[0]; 여러개 선택
//document.querySelector('.navigation'); 맨위에 것만 선택

var navi = document.querySelector('.navigation'); //클래스 navigation선택
navi.style = "width:100%; height:50px; background-color:#dcd";

//생성 ->document.createElement('ul'); UL생성
// var makeUl2 = '<ul class="List"></ul>'; //innerHTMl을 사용시 직접 내용을 작성
// navi.innerHTML = makeUl2;
var makeUl=document.createElement('ul'); //내부에 추가로 삽입할때 요소로 삽입처fl
makeUl.classList.add('List');
navi.append(makeUl);

//ul.List선택 ->querySelector('.List')
//내부에 담을 Li 생성-> creatElement('li') 
//li내부에 유일요소인 a생성 ->createElement('a')->'<a></a>'
//Li를 .List에 담기 -> .list.append(li)
//a에 href=속성처리, text글자삽입
//console.log(dataList[0].title, dataList[0].link);


var UlList = document.querySelector('.List'); //.list선택
//step 1 : li요소 하나만 생성하여 삽입하기!
/*
var makeLi = document.createElement('li'); //.List안에 LI만들기
var title = dataList[0].title //json으로 불러온 배열의 0번째의 타이틀 변수선정
var link = dataList[0].link //json으로 불러온 배열의 0번째의 링크 변수선정

var makeA = '<a class="link" href="' + link +'">'+ title+ '</a>'; // 변수선정한 객체를 a태그를 만듬
makeLi.innerHTML = makeA; //문자로 만든형식은 변수.innerHTML을 사용 , HTMl LI안에 변수makeA 삽입
UlList.append(makeLi);  //li를 UL에 삽입
*/

//step2: li요소를 ul에 각각 여러개 삽입 // 여러개 생성/삽입 for(){}

/*
var i =0;
var len = dataList.length;
var makeLi;
var makeA;
var findA;
var title;
var link;

for(;i<len;i+=1){
  makeLi = document.createElement('li');
  makeA = '<a class="Link"></a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');
  title = dataList[i].title;
  link= dataList[i].link;
  findA.href = link;
  findA.innerText=title;
  UlList.append(makeLi); //UlList.내부의 뒤에 삽입(생성된li )
}
*/


//step3 : forEach()
/*
dataList.forEach(function(data,index){
  var makeLi =document.createElement('li');
  var makeA = '<a class="Link"></a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');  
  findA.href = data.link;
  findA.innerText=data.title;
  UlList.append(makeLi); 
});
*/
//for문과 forEach의 차이는 전체를 순환한다는 의미/각각처리

//-----------------------------------------------------------

//함수화처리
//forEach로
/*
var loopFn1 = function(data){
  var makeLi =document.createElement('li');
  var makeA = '<a class="Link"></a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');  
  findA.href = data.link;
  findA.innerText=data.title;
  UlList.append(makeLi); 
};

dataList.forEach(loopFn1);*/
//=============================================================
//for문을 함수화 처리

// var i =0;
// var len = dataList.length;
// var makeLi;

// var loopFn2 = function(i){
//   var makeA;
// var findA;
// var title;
// var link;
// makeLi = document.createElement('li');
// makeA = '<a class="Link"></a>';
// makeLi.innerHTML = makeA;
// findA = makeLi.querySelector('a');
// title = dataList[i].title;
// link= dataList[i].link;
// findA.href = link;
// findA.innerText=title;
// UlList.append(makeLi); //UlList.내부의 뒤에 삽입(생성된li )
// }

// for(;i<len;i+=1){
//   loopFn2(i);
// };

//javascript로 순수하게 처리하는것: 모든것을 수동으로 처리
//jquery로 처리하는 것:반자동처리

// console.log( $.fn );

(function($){
  // console.log($.fn)
  var ul = $('.List'); //$ = document.querySelector
  //li생성/삽입
  //제이쿼리의 append는 생성과 삽입 동시, JS에서는 삽입
  //jquery에서는 if, for, forEach등 등 문법 그대로 활용이 가능
  //forEach대신 수행가능한 메소드는 jQuery에 별도로 첨부
  dataList.forEach(function(content,index){
    // ul.append('<li><a class="Link" href="'+ content.link +'"> '+ content.title +'</a></li>');  
    ul.append('<li><a class="link" href=""></a></li>'); //제이쿼리에서의 append는 생성과/삽입   JS에서의 append는 삽입
    var list= ul.children('li').eq(index).children('a');
    list.text(content.title);       //선택자.innerText = '값';
    list.attr('href', content.link);//선택자.setAttribute('속성명','값);
  });
})(jQuery); //즉시실행함수

