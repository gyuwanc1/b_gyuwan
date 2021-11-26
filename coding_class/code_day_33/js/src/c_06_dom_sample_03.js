//c_06_dom_ample_03.js

(function($){
  //tab메뉴의 타이틀 중의 하나를 선택했을 경우 해당하는 순번의 내용요소를 나타나게 만들기
  //제목과 내용 모두 .on 이름으로 처리했으므로 해당하는 내용에 따른 .on을 첨부/제거의 역할이 필요
  //클릭한 요소의 순번이 몇번째 인가?, 내가 처리해야하는 순번은 몇번째에 주어야 하는가
  //변수====================================================
  var conBox = $('#contentBox');
  var conTitle = conBox.find('.tab_title_inner');//find-자손선택자
  var conTitleUl = conTitle.children('ul'); //children-자식선택자
  var conTitleLi = conTitleUl.children('li');
  var conTitleBtn = conTitleLi.children('button');

  var conContent = conBox.find('.tab_content_inner');
  var conContentList = conContent.children('div');
  //=======================================================
  var index;


  //이벤트================================================
  conTitleBtn.on('click', function(event){
/*    event.preventDefault();
    //jQuery에서는 이벤트 처리된 주체를 $(this)라고 한다.
    //클릭한 요소는 버튼요소이므로 자신이 아닌 그부모의 순서값을 파악해야 한다.
  index= $(this).parent().index() ; //parent:부모선택자
  
  //전체에 class제거 후 선택순서에 .on첨부==================

  //conTitleLi에 들어있는 .on을 모두제거
  conTitleLi.removeClass('on');

  ////conTitleLi중 index번째 (eq9(순서지정)) 에 .on을 첨부
  conTitleLi.eq(index).addClass('on'); //eq(순서지정) : 배열요소[순서지정]
   conTitleLi.removeClass('on');  
  conContentList.removeClass('on');
  conContentList.eq(index).addClass('on');
  */
  //----------------------------------------------------------
  
 
  conTitleLi.eq(index).addClass('on');
  conContentList.eq(index).addClass('on');
//siblings:형제를 의미하며, 선택한 요소(eq)를 제외한 다른 형제를 선택하는 선택자.
  conTitleLi.eq(index).siblings().removeClass('on'); 
  conContentList.eq(index).siblings().removeClass('on');   
});
  //css는 유교사상이 반영된 선택자, js는 상관없이 가능한 선택자.

  //======================================================
  //jquery는 여러개의 선택자가 존재할때 이를 묶어서 한번에 클릭이 가능한데 이때 그 순서를 파악하는 것은 클릭시 index로 처리
  //JS는 여러개의 선택자가 존재시 여러개를 클릭시에 그 클릭 대상들을 반복수행해서 처리해야 한다. (for/for each)


})(jQuery);

//배열의 개념과 비교
var arr = [1,3,5,7,9];
console.log(arr[3]);         // 7 ->jQuery:eq(3);
console.log(arr.indexOf(7)); // 7의 위치를 파악 3 ->jQuery : index();

//우리 오늘 한거?
/*
버튼처리 클릭시 slide 형식의 사라짐과 토글기능
//setInterval, setTimeout을 이용한 랜덤 숫자배열/color매치
//탭메뉴 형식의 레이아웃 구성 -> jquery코드 작성 
과제:버튼 클릭시 모달윈도우 형식 fade구성처리 (opacity:block, 0-100% / 100%-0,none);
//선택박스.fadeIn(), 선택박스.fadeOut(), 선택박스.fadetoggle()
*/
