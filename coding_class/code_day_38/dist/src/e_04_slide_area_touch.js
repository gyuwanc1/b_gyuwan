//e_04_slide_area_touch.js



//===========================
/**전체시나리오
 * 1. 터치기반의 형식으로 광고슬라이드 제작
 * 2.마우스기반의 드래그 형식의 슬라이드 제작 
 * 3.slide 광고 틀제작(json형식의 외부데이터 불러오기)
 */
//===========================
/** 
 * 외부 데이터 불러와서 적용(html-임시)
 */
//============================

const path = "../temp/slide_area3.html";
const eltitle = document.querySelector('head>title')

const elviewBox = document.querySelector('#viewBox');
let elViewWrap;
let elViewLi;

fetch(path)
.then((response)=> response.text() )
.then ((data)=>{
  elviewBox.innerHTML =data;
})
.then(()=>{
  const linkCss=document.createElement('link');
  linkCss.setAttribute('rel','stylesheet');
  linkCss.setAttribute('href','../css/src/e_04_slide_area_touch.css');
  eltitle.before(linkCss);
})
.then(()=>{
  let elViewWrap = elviewBox.querySelector('.view_wrap');
  let elViewLi = elViewWrap.querySelectorAll('li');
  // const cloneEl= elViewLi[elViewLi.length-1].cloneNode(true);
  // elViewWrap.prepend(cloneEl);
  return [elViewWrap,elViewLi];
})
.then((el)=>{
  const elViewCon = elviewBox.querySelector('.view_content');
  elViewCon.style.overflowX='hidden';

  //좌표X의 이동점의 차이가 100px이상나면 해당하는 위치로 이동
  
  const pointer = {};
  //기능추가
  let i =0;
  let PERMISSION = true;
  let timed =500;
  el[0].style.marginLeft = 0;
  el[0].style.position = 'relative';
  el[0].style.left = 0;
  el[0].parentNode.style.padding = '10px';
  el[0].parentNode.style.border = '10px solid #654';
  el[0].parentNode.style.boxSizing = 'border-box';
  
  el[0].style.transition = 'left '+timed+'ms linear';
  let leftData = parseInt(el[0].style.left);

  let conWidth = elViewCon.clientWidth
  //console.log(window.getComputedStyle(el[0]/parentNode).width)
  console.log('width', el[0].parentNode);

  //element.clientWidth() : padding포함한 width
  //element.offsetWidth() : padding + border 포함한 width
  //element.getBoundingClientRect() : 외곽에 보이는 width
  //

  

  //함수------------------------
  const fnSlidemove = () => {
    if(PERMISSION){
      PERMISSION = false;
    }
    if(pointer.gap>=100 && i < el[1].length -1){
      i +=1;
      // el[0].style.left=-100 + '%';

    }else if(pointer.gap <= -100 && i > 0){
      i -=1;
      // el[0].style.left=100 + '%';
    }
    el[0].style.left = -100 *i + '%';
    setTimeout(()=>{
      PERMISSION=true;
    },timed)
  };

    //이벤트---------------------
  elViewCon.addEventListener('touchstart',(e)=>{
    console.log('시작점:', e.changedTouches[0].pageX);
    pointer.start = e.changedTouches[0].pageX;
    leftData = parseInt(el[0].style.left);
    
  })
  
  elViewCon.addEventListener('touchmove', (e)=>{
    let _nowpointer = e.changedTouches[0].pageX;
    // el[0].style.left = -100 *i + '%';

    //시작점 기준으로 움직인 값 pointer.start - nowPointer
    let _pointermove = pointer.start - _nowpointer;
    //해당하는 움직인 값의 % 값
    let movePer = parseInt(_pointermove / conWidth * 100);
    

    el[0].style.left = (leftData - movePer) + '%';
    // console.log(pointer.start - elViewCon / 100);
  })

  elViewCon.addEventListener('touchend',(e)=>{
    console.log('끝점:', e.changedTouches[0].pageX);
    pointer.end = e.changedTouches[0].pageX;
    pointer.gap = pointer.start - pointer.end;
    console.log(pointer);

    fnSlidemove();

  })
  

  // let prev = ()=>{
  //   if(pointer.gap<100){
  //     elViewLi -=1
  //   }
  // };

  // let next = ()=>{
  //   if(pointer.gap>100){
  //     elviewLi +=1
  //   }
  // } 

});

//q1: 갭차이가 100이상 날경우 그값이 음수이면 이전내용, 양수이면 다음내용이 나타나게 만드시오

//터치기반으로 처리하기
/*
touchstart : 이벤트 핸들러중 터치의 시작을 의미
touchmove : 이벤트핸들러 중 터치를 이용하여 움직이는 상황
touchend : 이벤트 핸들러 중 터치의 끝을 의미
event.changedTouches[0]:터치를 인식하여 좌표를 계산하는 위치w
event.touches[0]:터치를 인식하여 좌표를 계산하는 위치 touchend가 없음
터치를 이용하여 좌표를 계산하는 기능 : clientX, screenX, pageX 가 존재(y좌표도 있음)
대상의 위치를 기준으로 좌표를 계산(offsetX)하는 기능이 없으므로, 해당요소의 위치를 파악하는
기능 필요 : target.getBoundingClientRect().left | right
target.getBoundingClientRect().top
*/
  // elViewCon.addEventListener('touchmove',(e)=>{
  //   console.log('changed', e.changedTouches[0].pageX);
  //   console.log('touch', e.touches[0].pageX);
  // })
  // elViewCon.addEventListener('touchend',(e)=>{
  //   console.log('changed', e.changedTouches[0].pageX);
    // console.log('touch', e.touches[0].pageX);

  // })
  //console.log(elViewCon.getBoundingClientRect().left);