(function($){

var nt =  $('.next');
var slideWrap = $('.slide_con_wrap');
var div = slideWrap.children('div');
var i = 0;

//버튼을 클릭 할때마다 div의 i번째에  내용이 나타나게!!

nt.click(function(){
  //1씩 더하겠다.-
  i += 1;
  // i가5보다 크거나 같으면 i를 0으로 다시 설정
  if(i >=5){i = 0;}

  //div는 모두 숨겨라
  div.eq(i).siblings().removeClass('run');
  //div중에 i번째는 나타나게 해라.
  div.eq(i).addClass('run');
});

})(jQuery);