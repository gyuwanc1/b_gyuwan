//e_02_slide_area

//변수
const elViewbox = document.querySelector('#viewBox');
const elSlideContent = elViewbox.querySelector('.slide_content');
const elSlideUl = elSlideContent.querySelector('.slide_wrapper');
//현재의 선택자 li는 복제 전 요소 
const elSlideLi = elSlideUl.querySelectorAll('li');   
const elSlideCvt = [].slice.call(elSlideLi);

const elslide_btn = elViewbox.querySelector('.slide_btn');


//추가설정 변수
const slideLen = elSlideLi.length;
console.log(elSlideUl);

//기능처리
//1.1마지막 요소 복제하여 앞에 붙이기 (prepend)
const elSlideLast = elSlideCvt.at(-1); //-1은  배열상의 맨뒤로 이동
const cloneSlide = elSlideLast.cloneNode(true);
elSlideUl.prepend(cloneSlide);

//1.2변경된 요소의 갯수에 맞게 ul의 사이즈변경
//1.3  li요소의 사이즈를 변경 (복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리)
//1.4 메인에 보여줘야 하는 요소를 맞추기 위해 위치이동 (왼쪽방향으로 -100% 만큼 이동);

const ulStyle = elSlideUl.style;

elSlideUl.style.width = ( 100 * (slideLen +1) ) + '%'; // width값 500%로 변경
elSlideUl.style.position = 'relative';
elSlideUl.style.left = 0;
elSlideUl.style.marginLeft = '-100%';
elSlideContent.style.overflowX = 'hidden';

const elSlideLiRe = elSlideUl.querySelectorAll('li');
const elSlideLiReCvt = [].slice.call(elSlideLiRe); // li요소 재선택

elSlideLiReCvt. forEach((li,idx)=>{
  li.style.width = 100 / (slideLen +1) + '%';
})


//이벤트 구동 시나리오
//1. next버튼 클릭
//2. LI 를 감싸고 있는 UL이 반대로 이동 (-100%씩 이동)
//3. 다음 li가 보임

//4. prev 버튼 클릭시
//5. Li 를 감싸고 있는 UL이 정방향으로 이동 (+100% 이동)

//-----------------------------------------------------------------------------
const slideNext = elViewbox.querySelector('.next');
const slidePrev = elViewbox.querySelector('.prev');


//함수


//이벤트

//이벤트처리


let i = 0;
let timed_Op =500;
ulStyle.transition = `left ${timed_Op}ms linear`;
slideNext.addEventListener('click',(e)=>{
  e.preventDefault();
  i+= 1;

  if ( i >= slideLen){ 
    i = 0;
    ulStyle.transition = null;
    ulStyle.left = 100+'%'
  }
  
  setTimeout (()=>{
    
    ulStyle.left = (-100 * i) + '%';
  },700 )
  

});

// elPrev.addEventListener('click',(e)=>{
//   e.preventDefault();
  
// });