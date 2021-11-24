// c_02_dom_make_navi_01.js

// 메뉴를 클릭하면, navigation영역이 나타나게 / 나타나 있으면 사라지게 해라

var navBtn = document.querySelector('.navi_btn');
var navbarSupportedContent = document.querySelector('.navi_inner');

navBtn.addEventListener('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';

  var isAction = navbarSupportedContent.classList.contains(checkClassName);
 
  if(!isAction){
    navbarSupportedContent.classList.add(checkClassName);
  }else{
    navbarSupportedContent.classList.remove(checkClassName);
  }
});