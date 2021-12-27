//e_02_slide_area

//변수
const elViewbox = document.querySelector('#viewBox');
const elSlideContent = elViewbox.querySelector('.slide_content');
const elSlideUl = elSlideContent.querySelector('.slide_wrapper');
const elSlideLi = elSlideUl.querySelectorAll('li');   
const elSlideCvt = [].slice.call(elSlideLi);

const elslide_btn = elViewbox.querySelector('.slide_btn');


//---------------------------------------------------------------------
const slideLen = elSlideLi.length;
console.log(elSlideUl);

//기능처리

const elSlideLast = elSlideCvt.at(-1);
const cloneSlide = elSlideLast.cloneNode(true);
elSlideUl.prepend(cloneSlide);

const ulStyle = elSlideUl.style;

elSlideUl.style.width = ( 100 * (slideLen +1) ) + '%';
elSlideUl.style.position = 'relative';
elSlideUl.style.left = 0;
elSlideUl.style.marginLeft = '-100%';
elSlideContent.style.overflowX = 'hidden';

const elSlideLiRe = elSlideUl.querySelectorAll('li');
const elSlideLiReCvt = [].slice.call(elSlideLiRe); 

elSlideLiReCvt. forEach((li,idx)=>{
  li.style.width = 100 / (slideLen +1) + '%';
})
//-----------------------------------------------------------------------------
const slideNext = elViewbox.querySelector('.next');
const slidePrev = elViewbox.querySelector('.prev');
const elcount = elViewbox.querySelector('.count_part');
const elNowCount = elcount.querySelector('.now_count');
const elTotalCount = elcount.querySelector('.total_count');


//함수

//이벤트처리


let i = 0;
let timed_Op =300;
elTotalCount.innerText = slideLen;
ulStyle.transition = `left ${timed_Op}ms linear`;

//-----------------------------------------------
const fnNowCount = ()=>{
  elNowCount.innerText = i +1;
}


//=========================================다음버튼
slideNext.addEventListener('click',(e)=>{
  e.preventDefault();
  i += 1;

  if ( i >= slideLen){ 
    i = 0;
    ulStyle.transition = null;
    ulStyle.left = 100+'%'
  }
    setTimeout (()=>{
      ulStyle.transition = `left ${timed_Op}ms linear`;
      ulStyle.left = (-100 * i) + '%';
      fnNowCount();
  },300 )
  
});

//------------------------------------------------------------------------

//============================================================================


/* 시나리오
* 슬라이드 처리에 따른 카운트 수치 수행
* 복제 이전의 갯수파악하여 .total_count에 값 삽입
* 현재보이는 순번을  .now_count에 값 삽입
* 다음/이전버튼 수행시 /now_count값은 계속 변화
*/

//============================================================================
//* 이전버튼 시나리오
//1. ul이 현재위치 기준으로 오른쪽 100% 이동 (100% * ㅑ)
//2.반복수행
//3. 원본이미지 처음요소에 위치했을경우 복제된 곳으로 animation으로 이동하여 복제 원본요소로 점프 이동
//4. 여러번 반복 클릭시 문제점 발생 ->권한부여하여 처리
//5. 움직이는 기준이 되는 변수는 공통변수, 권한을 부여하는 변수 공통변수

slidePrev.addEventListener('click',(e)=>{
  e.preventDefault();
  i -=1;
  // console.log(i);
  ulStyle.left = -100* i +'%';


  //timed_Op 시간이 지난 후에 i 값을 파악하여 추가진행
  setTimeout ( ()=>{
    if (i <=-1){
      
      i = slideLen-1;
      ulStyle.transition = null;
      ulStyle.left = -100* i +'%';
      
      setTimeout (()=>{
        ulStyle.transition = `left ${timed_Op}ms linear`;
        
      },10)
    }
    fnNowCount();  
  },timed_Op)
  
})

fnNowCount();



//==================================================================================
