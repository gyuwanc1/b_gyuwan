//e_08_rwd_nav_mobile

//1. #navBox 내부의 .nav_btn을 클릭시 해당하는 요소에 .on처리
//2. 해당하는 요소에 .on처리

//------------------------------------------------------------------
//변수
{
const elNavBox = document.querySelector('#navBox');
const elGnb  = document.querySelector('.gnb');
const NavBtn = elNavBox.querySelector('.nav_btn');

const Option_name = 'on';
const Option_view = 'block';
const Option_none = 'none';

//이벤트
NavBtn.addEventListener('click', (e)=>{
  const ckOption = NavBtn.classList.contains(Option_name);
  if(!ckOption){
    elGnb.style.display = Option_view;
    NavBtn.classList.add(Option_name);
  }else {
    elGnb.style.display = Option_none;
    NavBtn.classList.remove(Option_name);
  }
});

}
// NavBtn.children[0].addEventListener('focus',(e)=>{
//   NavBtn.classList.toggle(Option_name);
// });
