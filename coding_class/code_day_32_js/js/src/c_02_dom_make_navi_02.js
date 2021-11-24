
// c_02_dom_make_navi_02.js

// * 버튼 클릭 -> 하위 메뉴가 나타나거나 사라지게 만들기
// 1. 버튼클릭 : .drop_btn > button 클릭
// 2. 나타나거나 사라지는 요소 : .sub_menu 나타나거나 사라지게 ( style에 직접 display:none/block) ->  none/block ?
// 2-1.  css에 들어있는 속성 값을 파악하는것.: getComputedStyle(선택자)[속성명];
// 2-2. html문서에 들어있는 속성의 값을 파악하는것 : 선택자.속성명(.속성명...)
// 2-3. 상황에 따라 둥중 하나의 값을 가져와야하는데 한쪽이 없거나 대신처리해야하는 상황이 올 수도 있다.
//      var a = i || 10;  
// * 옵션 : event.preventDefault();

// 변수 ----------------------------------------------------
var dropBtnSelector = document.querySelector('.drop_btn');
var dropBtn = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var subMenuStyle = getComputedStyle(subMenu);
// console.log( window.getComputedStyle(subMenu) );

var displayStateFn = function(selector){
  //선택자의 display 상태값을 가져오는데 기본html문서에서 값을 가져오되 없다면, css기본값에서 가지고 오자.
  return selector.style.display || getComputedStyle(selector).display;
}

// 이벤트 ----------------------------------------------------
dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  // subMenu.style.display = 'block';
//(subMenuStyle.display === 'none) ? subMenu.style.display = 'block : subMenu.style.display = 'none';
var state = displayStateFn(subMenu);
(state === 'none') ? subMenu.style.display = 'block' : subMenu.style.display = 'none'; 

  // console.log( subMenu.style.display );
});
