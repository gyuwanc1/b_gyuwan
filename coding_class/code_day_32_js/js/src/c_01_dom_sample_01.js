// c_01_dom_sample_01.js

//1.버튼을 클릭한다 ->메뉴 나타나라
//2.버튼을 클릭한다.->메뉴 사라지게

//================================================
//1.버튼을 클릭한다->메뉴가 나타나라
//1-1 버튼 :.navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
//1-2 클릭 : 선택자 클릭 (addEventListener)-> navToggleBtn.addEventrListener('click',function(event){});
//1-3 menu : id="navbarSupportedContent" -> getElementById('#navbarSupportedContent');
//1-4 나타나기(어떻게?)-html.classname="action" : class이름 추가(?) + (none->block) 

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');
navToggleBtn.addEventrListener('click',function(event){
  //1-4 수행  기능 찾아보기 
}); //변수를 상단으로 이벤트기능들은 밑으로 정렬
