//c_14_fade_in_view
const viewArea = document.querySelector('.view_area')

const viewBox = viewArea.querySelector('ul')
const viewSlide = viewBox.querySelectorAll('li')

const prev = viewArea.querySelector('.prev')
const next = viewArea.querySelector('.next')

// li갯수파악
const lilen = viewSlide.length;
const viewOn = 'on';
let i = 0;

//함수================================================

const fnAddCountT1 = ()=>{
  viewSlide[i].classList.remove(viewOn); 
  if(i < lilen -1 ){
    i +=1;
  }else {
    i = 0;
  }
  viewSlide[i].classList.add(viewOn);
};

const fnRemoveCountT1 = ()=>{
  viewSlide[i].classList.remove(viewOn); 
  if(i<= 0 ){
    i  = lilen -1;
  }else {
    i -= 1;
  }
  viewSlide[i].classList.add(viewOn);
};

//이벤트처리 ================================================
//다음버튼
next.addEventListener('click', (ev)=>{
  ev.preventDefault();
  fnAddCountT1();
})
//이전버튼
prev.addEventListener('click', (ev)=>{
  ev.preventDefault();  
  fnRemoveCountT1(); 
})