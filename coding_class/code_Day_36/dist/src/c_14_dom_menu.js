//c_14_fade_in_view

//---------------------------------------------------
//시나리오
//다음버튼 클릭시 - fadeout/fadein 기능을 이용하여,이미지 변셩
//1. 현재보이는 이미지에 버튼 클릭시 보이는 이미지 바로뒤에 이미지가 나타나게 만들기
//2. 현재 보이는 이미지를 투명도 1/0 으로 변경
//3.투명도가 0이 되면 display:none으로 사라지게
//4. animation기법으로 처리되어 사라진 이미지style(html에 새겨진) 제거

const viewArea = document.querySelector('.view_area')

const viewBox = viewArea.querySelector('ul')
const viewSlide = viewBox.querySelectorAll('li')

const prev = viewArea.querySelector('.prev')
const next = viewArea.querySelector('.next')



// li갯수파악

// const viewOn = 'on';
// let i = 0;
let [checkit, i, timed, cssFn] = ['act', 0, 500, 'ease'];
let beforeI = i;
const lilen = viewSlide.length;
// let permission = true;
//옵션변수

viewSlide[i].classList.replace('on', checkit);



//함수================================================
// const fnDelay = async (t = timed) => {
//   const promise = new Promise(resolve => {
//     setTomeout( () => resolve('opacity처리완료!'),t)
//   })
//   return promise;
// }

// const fnInsertStyle = () => {
// viewSlide[beforeI].style.display = 'block' ;
// viewSlide[beforeI].style.zIndex = '20' ;
// viewSlide[beforeI].style.position = 'absolute' ;
// viewSlide[beforeI].style.transition = `all ${timed}ms ${cssFn}`;
// }

const fnOpacity = ()=>{

  viewSlide[i].style.display = 'block';

  viewSlide[beforeI].style.transition = `all ${timed}ms ${cssFn}`;
  viewSlide[beforeI].style.opacity = 0;

  //수행2
  setTimeout(()=>{
    viewSlide[beforeI].removeAttribute('style');
    viewSlide[beforeI].classList.remove(checkit);
   
    //viewSlide[i].style = null
    viewSlide[i].classList.add(checkit);
    beforeI = i
    // fnInsertStyle();
    },timed )
  }
  


//함수 기본 수행
// fnInsertStyle();
//================================================
//이벤트처리 
//다음버튼
next.addEventListener('click',(e)=>{
  e.preventDefault();
    //수행1
    (i < lilen-1) ? i +=1: i = 0;
  fnOpacity();
  
})
//이전버튼
prev.addEventListener('click',(e)=>{
  e.preventDefault();
    //수행1
  
  (i > 0) ? i -=1: i = lilen-1;
  fnOpacity();

})