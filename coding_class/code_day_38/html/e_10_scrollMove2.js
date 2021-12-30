// e_10_scrollMopve_)2.js

//브라우저에서 스크롤이 얼만큼 움직였는가에 따라 그값을 가지고 이미지를 변경하게 처리
/*
* 1. img모두 첨부 후 1장빼고 display:none;
* 2. 스크롤시 이동값
* 3. 스크롤에 의한 이미지가 다 끝나고 난뒤 이후에 보여줄 내용을 원활하게 보이도록 처리  
*/

//선택자
const elViewBox = document.querySelector('#viewBox');
const elImgArea = elViewBox.querySelector('.img_area');
const count_num = 59;
const Option_on = 'on';

//이미지첨부하는 함수생성
const fnImgInsert = (n) => {
  let convertStr = '000000' + (n+1); 
  let cutNum = convertStr.slice(-3);
const [url, alt] = [`../multi/img/koko/`, `코로나광고`]
let fileName = `${url}koko${cutNum}.png`;
const mkImg = document.createElement('img')
if(n === 0){mkImg.classList.add(Option_on)};
mkImg.setAttribute('src', fileName);
mkImg.setAttribute('alt', alt);
elImgArea.append(mkImg);
}
for(let i = 0;i <count_num; i+=1){
  fnImgInsert(i);
}
//기능처리 후 변수

const elImg = elImgArea.children;
const elImgArr = [].slice.call(elImg);

//=============================================================
//이벤트
window.addEventListener('scroll',(e)=>{ //브라우저에서 스크롤이 실행되었을때
  let moveScroll=parseInt(e.currentTarget.scrollY/50);//브라우저가 스크롤이 움직인 값 파악, 스크롤값을 줄이기 위해 일정값 나눠 숫자제한
  // if(moveScroll >= count_num){moveScroll= count_num -1}
  let scrollN = (moveScroll >= count_num) ? count_num -1 : moveScroll;

  //이미지 중에서 moveScroll의 값에 해당하는 이미지 나타나고, 나머지는 사라지게 수행
  elImgArr.forEach((img,idx)=>{
    // img.classList.remove(Option_on) //이미지 각각 전부 .on을 제거
    // elImgArr[moveScroll].classList.add(Option_on);// mopveScroll 순번의 이미지는 .on 첨부
    (idx !== scrollN)? img.classList.remove(Option_on): img.classList.add(Option_on);    
  });
  let topMove = (count_num) - moveScroll;
  console.log(topMove);
  if(topMove < 0){
    elViewBox.style.top =(topMove*30) + 'px';
  }
})


// 숫자 마지막 3자리 파악하는 코드 
  // console.log(i+1);
  // if(i<9){console.log('00'+(i+1));}else{console.log('0'+(i+1)); }
  // let converStr = (i+1).toString();
  // console.log(converStr.padStart(3, '0')); //구형브라우저 지원Xv