// c_01_dom_sample_01.js

//1.버튼을 클릭한다 ->메뉴 나타나라
//2.버튼을 클릭한다.->메뉴 사라지게

//================================================
//1.버튼을 클릭한다->메뉴가 나타나라
//1-1 버튼 :.navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
//1-2 클릭 : 선택자 클릭 (addEventListener)-> navToggleBtn.addEventrListener('click',function(event){});
//1-3 menu : id="navbarSupportedContent" -> getElementById('#navbarSupportedContent');
//1-4 나타나기(어떻게?)-html.classname="action" : class이름 추가(?) + (none->block) 
//1-5 기능을 수행하기 전 체크: 
// 해당버튼의 고유기능 해제 (event.prevent()) 
// action의 유무:classList.contains("action")

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click',function(event){
  event.preventDefault(); //기존의 기능(고유기능)을 못쓰게 함 
  var checkClassName = 'on'; 
  //1-5 사전기능 처리:  
  var isAction = navbarSupportedContent.classList.contains(checkClassName);
  // console.log(isAction);
  //1-4 수행  기능 찾아보기 
  if(!isAction){
    navbarSupportedContent.classList.add(checkClassName);
  }else{
    navbarSupportedContent.classList.remove(checkClassName);
  }
}); //변수를 상단으로 이벤트기능들은 밑으로 정렬

//=============================================================================================
//jQuery로 코드 작성시
/*
var navToggleBtn = $('.navbar-toggler');
var navbarSupportedContent = $('#navbarSupportedContent');

navToggleBtn.ㅐㅜ('click',function(event){
  event.preventDefault(); //기존의 기능(고유기능)을 못쓰게 함 
  var checkClassName = 'on'; 
  //1-5 사전기능 처리:  
  var isAction = navbarSupportedContent.classList.hasClass(checkClassName);
  // console.log(isAction);
  //1-4 수행  기능 찾아보기 
  if(!isAction){
    navbarSupportedContent.classList.addClass(checkClassName);
  }else{
    navbarSupportedContent.classList.removeClass(checkClassName);
  }
}); //변수를 상단으로 이벤트기능들은 밑으로 정렬
*/