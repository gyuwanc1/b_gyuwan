// c_13 dom_menu

//=====================================
//시나리오 
//1. 다음버튼 클릭시 li의 다음 내용이 나타나게 만들기
//1.1 li의 갯수
//1.2 class='on'의 여부
//1.2.1 이전값 파악해서 on(+-)
//1.2.2 선택한것 추가 다른것 빼기
//1.2.3 전체를 빼고 선택한 요소 추가(+-)
//1.3 순번이 마지막에 가면 처음으로 이동

//2. 이전버튼을 클릭시 위기능을 동일하게 수행
//===============================================
//변수설정
const viewArea = document.querySelector('.view_area')

const viewBox = viewArea.querySelector('ul')
const viewSlide = viewBox.querySelectorAll('li')

const prev = viewArea.querySelector('.prev')
const next = viewArea.querySelector('.next')

// li갯수파악
const lilen = viewSlide.length;
const viewOn = 'on';
let i = 0;
//--------------------------------------------------------------------------

//함수 ---------------------------------------------------------------------

//1번 풀이
/*
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
*/
//==================================================================
//2번 풀이
//선택자 관련 함수기능 선택한 순번을 제외한 나머지 형제를 선택
/*
const fnSiblings = (select, idx = i) => {
  
  const otherArr =[];
  select.forEach((element,index) => {
    // let check=element.classList.contains(viewOn);
    // if(!check) {otherArr.push(element)}
    if(idx !== index){otherArr.push(element)}
  })
  return otherArr;
}
// console.log(fnSiblings());

//다음버튼 클ㄹ릭시 1씩 카운트업 하면서 선택순번이 아닌경우 on빼라
const fnAddCountType2 = ()=>{
  (i < lilen-1) ? i += 1 : i = 0;
  viewSlide[i].classList.add(viewOn);
  fnSiblings(viewSlide, i).forEach((el)=> {
    el.classList.remove(viewOn);
  })
};

const fnRemoveCountType2 = ()=>{
  // (i <= 0) ? i = lilen - 1 : i -=1 ;
  (i > 0 ) ? i -= 1 : i = lilen -1;
  viewSlide[i].classList.add(viewOn);
  fnSiblings(viewSlide,i).forEach((el)=> {
    el.classList.remove(viewOn);
  })
};
*/

//3번 문제풀이 ====================================================
const fnAddCountType3 = ()=> {
  (i < lilen-1) ? i += 1 : i = 0;
  viewSlide.forEach ( (el)=>{
    el.classList.remove(viewOn)
  });
  viewSlide[i].classList.add(viewOn);
};
const fnRemoveCountType3 = ()=> {
  (i > 0 ) ? i -= 1 : i = lilen -1;
  viewSlide.forEach ( (el)=>{
    el.classList.remove(viewOn)
  });
  viewSlide[i].classList.add(viewOn);
};




//이벤트--------------------------------------------------------------------

//다음버튼
//1번풀이 

next.addEventListener('click', (ev)=>{
  ev.preventDefault();
  // console.log('click'); 
  // 같은변수를 공유하고 있기에 순서가
  //fnAddCountT1();
  //fnAddCountType2();
  fnAddCountType3();  
})
//이전버튼
prev.addEventListener('click', (ev)=>{
  ev.preventDefault();
  // console.log('click'); 
  // 같은변수를 공유하고 있기에 순서가
  //fnRemoveCountT1();
  //fnRemoveCountType2();
  fnRemoveCountType3();  
})


//2번 풀이
