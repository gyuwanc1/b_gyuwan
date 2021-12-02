//c_11_dom_insert_data.js

//별도 자료 ------------------------------------------------
var data = [
{ 
  title:'title'  , 
  contents: 'ab', lin:'http://naver.com',
  bgImg:'../multi/img/bottle.jpg',
  bgNarr:'병 이미지에 대한 설명'
}, //data[0].title

{ 
  title:'spring'  , 
  contents: 'bc', lin:'http://naver.com',
  bgImg:'../multi/img/cookie.jpg',
  bgNarr:'쿠키 이미지에 대한 설명'
}, //data[1].title

{ 
  title:'javascript'  , 
  contents: 'cd', lin:'http://naver.com'
}, //data[2].title

{
  title:'winter'  , 
  contents: 'de', lin:'http://naver.com',
  bgImg:'../multi/img/bottle.jpg',
  bgNarr:'병 이미지에 대한 설명'
}, //data[3].title

{
  title:'summer'  , 
  contents: 'ef', lin:'http://naver.com',
  bgImh:'../multi/img/juice.jpg',
  bgNarr:'주스 이미지에 대한 설명'
}, //data[4].title

{ 
  title:'banana'  , 
  contents: 'fg'
}, //data[5].title

{
  title:'group'  , 
  contents: 'gh',
  bgImh:'../multi/img/bottle.jpg',
  bgNarr:'병 이미지에 대한 설명'
}//data[6].title
];
//----------------------------------------------------------

/* 시나리오

.card 내부에 li요소 삽입
별도의 data객체를 만을어 해당하는 내용이 li에 첨부되게 진행

*/

var conBox = document.querySelector('#conBox');
var cardUl = conBox.querySelector('.card');

var i = 0 ;
var len = data.length; //배열의 갯수만큼
var makeLi; //li를 생성하여 담기위한 변수
//============================================
/* 점점 복잡해져가는 내용에 의해 추가작업이 어려움.
for(; i<2; i+=1){
  makeLi = document.createElement('Li'); 
  //makeLi.innerText = data[i].title + ' '+ (i+1);
  makeLi.innerHTML = '<div class="bg_img" style="background-image:url('+ data[i].bgImg+')" ><span class="blind">' + data[i].bgNarr + '</span></div><dl><dt>' + data[i].title + '</dt> <dd><span>' + data[i].contents +'</span><br /><a href=\" target=\"_blank\" ' + data[i].link + '\">자세히보기</a> </dd> </dl>';  //문자와 변수기리+로 이어주고 '',""로 문자 표시
  cardUl.append(makeLi);//innerHTML은 중복을 허용하지 않고 내부자료를 삭제후 덮어 씌우기.. append: 기존자료에 추가
}//escape 문자 =>\로 사용 :해당하는 글자가 어떠한 기능을 처리하게 만듬, 문자를 기능으로 기능을 문자로 
*/ 

// ''와 "" 는  상황과 문맥에 따라 쓰임이 달라진다.
//============================================
// 우선기본 코드를 모두 담은 후에 필요한 부분만 색출해서 수정/첨부/삭제

var baseCode= '<div class="bg_img"><span class="blind"></span></div>\
<dl>\
  <dt></dt>\
  <dd>\
    <span></span>\
    <br />\
    <a target="_blank">자세히 보기</a>\
  </dd>\
</dl>';

for(; i < len ; i +=1) {
  makeLi = document.createElement('li');
  makeLi.innerHTML = baseCode;
  cardUl.appendChild(makeLi);
}

//내용중 1번째 내용만 우선 정리해서 삽입

//data[0].
//bgImg:background-image, bgNarr:설명
//title :제목
//content:내용, link:link주소
//===============================================
//시나리오2 :
//1. li요소 첫번째 선택
//2.공통 n번째를 가르키는 변수를 생성
//===============================================
var li = cardUl.querySelectorAll('li');
var setCardFn = function(n){
  var idx=n;
  var dt = li[idx].querySelector('dt');
  var narr = li[idx].querySelector('dd>span');
  var link = li[idx].querySelector('dd a');
  var bgImg = li[idx].querySelector('.bg_img');
  var bgNarr = bgImg.querySelector('span');
  
  //사용이미지가 없거나, 링크주소가 없거나 한다면() 해당요소는 삭제

  dt.innerText = data[idx].title;
  narr.innerText = data[idx].contents;
  // link.href = data[idx].lin //html상에 존재하는 프로퍼티에 값을 처리
  //data-...속성:사용자 속성 (사용자가 임의로 설정하는 속성)
  //link.setAttribute('href', data[idx].lin); //어떠한 속성도 처리가능 data-속성
  //<a data-href=""></a>

  if(data[idx].bgImg !== undefined) {

    bgImg.style.backgroundImage = 'url('+data[idx].bgImg+')';
    bgNarr.innerText = data[idx].bgNarr;
  }else {
    bgImg.remove();
  }   
};// setCardFn()
for ( i = 0 ; i < len; i +=1){
  setCardFn(i);
}
