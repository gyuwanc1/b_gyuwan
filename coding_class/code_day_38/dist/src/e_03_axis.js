//e_03_axis.js

/*
*마우스 움직였을 경우 해당위치의 좌표 파악
*/

const elWrap = document.querySelector('#wrap');

//이벤트-----------------------------------------------
elWrap.addEventListener('mousemove',(e)=>{
  console.log('clientX', e.clientX);
  // console.log('layerX', e.layerX);
  // console.log('movementX', e.movementX);
  // console.log('offsetX', e.offsetX);
  console.log('pageX', e.pageX);
//   console.log('screenX', e.screenX);
 })

//clientX | y -> 브라우저에 보이는 화면기준 (스크롤바 와 관계없이 보이는 기준)
//pageX | y -> 브라우저페이지 존재하는 내용 시잔부터 기준치를 잰 위치
//offsetX | y -> this기준(자기자신)
//screenX | y ->모니터화면의 좌표

//layerX  | y -> 비표준/브라우저기준
//movementX | y -> 이전기준과 차후의 기준의 값차이
// X | y