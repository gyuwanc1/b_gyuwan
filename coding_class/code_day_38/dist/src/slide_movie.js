//slide_movie.js

//=========================================
/* 시나리오1
* 
*1. 다음버튼 클릭시 첫 요소가 마지막으로 이동 
*
*/
//=========================================

//
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elmodal =  elViewBox.querySelector('.modal_area');
const elMovie = elmodal.querySelector('.movie');
const elmodalClose =  elmodal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');
let elSlide = [...elSlideLi];
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4')=>{
        return ` <video controls autoplay muted preload>
                    <source src="${fileName}" type="video/${type}" />
                  </video>`};
//====================================================

// elSlide.forEach((el,idx)=>{
//   el.setAttribute('data-num', idx);
// })
const path = "../data/video_modal.json";
fetch(path)
.then( reponse => reponse.json() )
.then( (data)=>{
  dbVideoData = [...data];
  elSlide.forEach((el,idx)=>{
    el.setAttribute('data-num', dbVideoData[idx].id);
  });
});

//====================================================
// const elSlideArr = [].slice.call(elSlideLi);
const fnSlideMove = (e)=> {
  e.preventDefault();
  let target = e.target.classList.contains('next');
  let elSlide = [...elSlideLi];
  (!target)? elSlideWrap.prepend(elSlide.at(-1)) : elSlideWrap.append(elSlide.at(0));  
  // .at 배열로 사용하는 것 (-1) 가능 [배열의 length-1] =[.at(-1)]
  elSlideLi = elSlideWrap.querySelectorAll('li');
}

//이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

elSlideWrap.addEventListener('click',e=>{
  e.preventDefault();
  let el = e.target
  let selectData;
  console.log(dbVideoData);
  if(el.tagName.toLowerCase() === 'button' ){
    let num = el.parentNode.getAttribute('data-num');

    selectData = dbVideoData.filter((data)=>data.id === parseInt(num) );   
    let src = `../multi/video/${selectData[0].file}.mp4`;
    elMovie.innerHTML = videoCode(src);
    elmodal.classList.add('on');
    elmodalClose.focus();
    
  }
})

elmodalClose.addEventListener('click', (e)=>{
  e.preventDefault();
  elmodal.classList.remove('on');
  elMovie.children[0].remove();
})
//-----------------------------------------------------------
//li를 클릭시 해당하는 내요엥 맞는 형상을 모달창에 띄워 처리

//e.target.tagName.toLowerCase() : 이벤트 처리된.타겟.요소이름.소문자로처리()



//====================================================================
 //이벤트발생.원인(target).class이름.contains =>있나 없나 확인

  // if(target('next')){ 
  //   fnSlideMove();
  // }else{
  //   fnSlideMove(true);
  // }


//-------------------------------------------------
//이벤트 위임: 실제로 클릭해야하는 요소가 아닌 그 부모에서 클릭했을 경우 해당하는 요소가 반응 할 수 있도록 인식
//버블링: 부모에 전달, 캡처링: 자식에게 전달



//==============================================================
// let elBtnWrap = elViewBox.querySelector('.slide_btn');
// let elNext = elBtnWrap.querySelector('.next');

//this
// elNext.addEventListener('click', function(e){
//   화살표 함수 : 생성자 함수를 만들 수 없는 함수
// console.log(this); //화살표 함수와 일반함수에 따라 역할이 달라진다.
// console.log(e.currentTarget); // 이벤트를 동작시키는 요소
// console.log(e.target); //이벤트가 발생되는 요소
// })
// elBtnWrap.addEventListener('click', (e)=>{
//   function(){} 함수일 경우 이벤트 주체, ()=>{} 함수일 경우 실행되는 위치(전체)
//     console.log(this); 
//     console.log(e.currentTarget);
//     console.log(e.Target);
// })


//버블링 :이벤트 발생부터 상위로 올라가는 개념
// elNext.addEventListener('click', function(e){
//   e.stopPropagation();
//   e.preventDefault(); 
//   console.log('버튼에서 명령')
// })
// elBtnWrap.addEventListener('click', (e)=>{
  
//   e.preventDefault();
//   console.log('버튼부모에서 명령')
// })


//캡쳐링: 이벤트 발생 요인이되는 곳까지 상위에서부터 차아내려가는 것



