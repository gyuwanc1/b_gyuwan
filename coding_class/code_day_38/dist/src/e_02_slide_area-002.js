// e_02_slide_area-002.js
// =========================================
/** 시나리오 - 1 
 * + 가로형슬라이드 형태를 구현을 위한 세팅 +
 * 1.1 광고슬라이드 마지막요소를 복제하여 첫번째 요소 앞에 배치
 * 1.2 내부요소의 부모요소의 크기를 기존 값보다 더 크게(400% -> 500%) 설정
 * 1.3 내부 요소들의 크기값을 기준 크기값에맞게 or 갯수로 분할하여 배치(1/4 -> 1/5)
 * 1.4 기본 첫번째 광고가 보이지 않고 복제된 광고가 나타나 있어 1칸만큼 이동하여 배치
 * 1.5 css 처리(nth-child) 에 관한 문제점 해결 - css에서 직접 수정
 */
// =========================================


(()=>{
  
  // 변수 -----------------------------------------------------------------
  // 선택자 
  const elViewBox = document.querySelector('#viewBox');
  const elSlideContent = elViewBox.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper'); // ul
  // 현재의 선택자 li는 복제전 요소
  const elSlideLi = elSlideUl.querySelectorAll('li');// Node(4) [ li, li, li, li ]
  const elSlideCvt = [].slice.call(elSlideLi);  // [ li, li, li, li ]

  // 추가설정 변수
  const slideLen = elSlideLi.length;

  // 기능처리 --------------------------------
  // 1.1 마지막요소 복제하여 앞에 붙이기(prepend) - li갯수 5개로 변경
  const elSlideLast = elSlideCvt.at(-1); // li의 마지막 요소를 선택
  const cloneSlide = elSlideLast.cloneNode(true); // li의 마지막 요소를 복제(내부요소까지 복제)
  elSlideUl.prepend(cloneSlide); // 복제요소를 앞으로 추가로 첨부 : css에서 nth-child는 사용할 수 없다 (이름으로 할당!)

  // 1.2 변경된 요소의 갯수에 맞게, `elSlideUl` 의 사이즈와, 
  // 1.3 `elSlideLi`요소의 사이즈를 변경 (복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리)
  // 1.4 메인에 보여주어야 하는 요소를 맞추기위해 위치 이동(왼쪽방향으로 -100% 만큼 이동);

  const ulStyle = elSlideUl.style;
  ulStyle.width = ( (slideLen + 1) * 100 )+'%';
  ulStyle.marginLeft = '-100%';
  

  const elSlideLiRe = elSlideUl.querySelectorAll('li');
  const elSlideLiReCvt = [].slice.call(elSlideLiRe);

  elSlideLiReCvt.forEach( (li,idx)=>{
    li.style.width = 100 / (slideLen + 1) + '%';
  });

// =========================================
/** 시나리오 - 2 
 * + 가로형슬라이드 형태를 구현을 위한 세팅 : 다음버튼 +
 * 2.1 다음버튼 클릭시 UL이 현재위치 기준 왼쪽으로 100% 이동 (왼쪽으로이동이기에  -100% * i)
 * 2.2 위 기능의 반복수행처리 체크
 * 2.3 기본 이동을 animation기능으로 부드럽게 이동
 * 2.4 원본이미지 마지막요소에 위치했을 경우 복제된곳으로 점프이동하여, 처음요소로 부드럽게 animation 이동
 * 2.5 여러번 반복 클릭시 문제점 발생됨 -> 권한을 부여하여 처리
 */
// =========================================
// =========================================
/** 시나리오 - 3
 * + 가로형슬라이드 형태를 구현을 위한 세팅 : 이전버튼 +
 * 3.1 다음버튼 클릭시 UL이 현재위치 기준 오른쪽으로 100% 이동 (오른쪽으로 이동이기에  +100% * i)
 * 3.2 위 기능의 반복수행처리 체크
 * 3.3 기본 이동을 animation기능으로 부드럽게 이동
 * 3.4 원본이미지 처음요소에 위치했을 경우 복제된곳으로 animation으로 이동하여, 복제원본요소로 점프 이동
 * 3.5 팁1 : 여러번 반복 클릭시 문제점 발생됨 -> 권한을 부여하여 처리
 * 3.6 팁2 : 움직이는 기준이 되는 변수는 "공통변수", 권한을 부여하는 변수 "공통변수" 
 */
// =========================================
// =========================================
/** 시나리오 - 4
 * + 슬라이 처리에 따른 count 수치 수행 +
 * 4.1 복제 이전의 갯수 파악하여 .total_count에 값 삽입
 * 4.2 현재 보이는 순번을 .now_count에 값 삽입
 * 4.3 다음/이전 버튼 수행시 .now_count값은 계속 변화 
 */
// =========================================

elSlideContent.style.overflowX = 'hidden';

const slideNext = elViewBox.querySelector('.next');
const slidePrev = elViewBox.querySelector('.prev');
const elCount  = elViewBox.querySelector('.count_part');
const elNowCount = elCount.querySelector('.now_count');
const elTotalCount = elCount.querySelector('.total_count');


let SLIDE_COUNT = 0;
let TIME_OPTION = 500;
let PERMISSION = true;

ulStyle.transition = `left ${TIME_OPTION}ms linear`;
ulStyle.position = 'relative';
ulStyle.left = 0;

elTotalCount.innerText = slideLen;

const fnDelay = async (ms = 0) => {
  return await new Promise(resolve=>{
    setTimeout( ()=> { resolve() }, ms)
  });
};

// 현재 슬라이드 위치를 표현하는 함수
const fnNowCount = ()=>{
  elNowCount.innerText = SLIDE_COUNT + 1;
};

// 다음버튼 클릭시 수행하는 함수
const fnAniSlide = async () =>{
  await fnDelay();
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;// ani첨부(있으면 덮어씌우기)
  ulStyle.left = ( -100 * SLIDE_COUNT ) +'%';
  await fnDelay(TIME_OPTION + 200);
  fnNowCount();
  PERMISSION = true;
};

// 이전버튼 클릭시 수행하는 함수
const aniPrevSlide = async () => {
  ulStyle.left = ( -100 * SLIDE_COUNT ) + '%'; 
  await fnDelay(TIME_OPTION);
  if(SLIDE_COUNT <= -1){
    SLIDE_COUNT = slideLen - 1;
    ulStyle.transition = null;
    ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';  
  }
  await fnDelay(200);
  fnNowCount();
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;
  PERMISSION = true;
};

// ------------------------------------------
// 기본함수 수행
fnNowCount();

// ------------------------------------------
// 다음버튼 클릭
slideNext.addEventListener('click', (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    SLIDE_COUNT += 1;
    if(SLIDE_COUNT >= slideLen){
      SLIDE_COUNT = 0;
      ulStyle.transition = null; //ani 삭제
      ulStyle.left = 100 +'%'; // 복제로이동
    }
    fnAniSlide();
  }// if
}); // slideNext.click


// 이전버튼 클릭
slidePrev.addEventListener('click', (e) => {
  e.preventDefault();
  if(PERMISSION === true){
    PERMISSION = false;
    SLIDE_COUNT -= 1;
    console.log( SLIDE_COUNT );
    // 변수 "ulStyle" 의 의미는 elSlideUl.style;
    // 최종결과물이 다음버튼 클릭시 음수수치,이전버튼 클릭시 양수 수치가 나와야 함

    // TIME_OPTION 시간이 지난 후에 SLIDE_COUNT 값을 파악하여 추가 진행
    /*
    setTimeout( ()=>{
      if(SLIDE_COUNT <= -1){
        SLIDE_COUNT = slideLen - 1;
        ulStyle.transition = null;
        ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';  
        setTimeout(()=>{
          ulStyle.transition = `left ${TIME_OPTION}ms linear`;
          PERMISSION = true;
        }, 200);
      }
    }, TIME_OPTION);
    */
    
    aniPrevSlide();
  }// if
}); // slidePrev 클릭

})();

// 1. indicator 
// 2. 일정시간마다 넘어가는 수치
// 3. 터치/마우스누른상태로 내용이동



// js에서는 잠시 기다렸다가 다음을 수행해라는 의미가 뒤에오는 코드들 까지 기다리게하는 의미가 아니다!