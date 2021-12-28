// e_08_respnsive_002.js

//headBox 내부에 있는 gnb영역과 nav_btn영역 선택
//2. 모바일 버전에서는 nav_btn영역이 존재, pc버전에서는 존재가 필요 없으므로 삭제
{
//선택자 변수
const elBody =document.querySelector('body');
const elHeadBox =document.querySelector('#headBox');
const NavBox = document.querySelector('#navBox');
// const navtitle =navBox.querySelector('h2');
// const NavBtn = NavBox.querySelector('.nav_btn');
// const Gnb = NavBox.querySelector('.gnb'); //사실상  그대로 


// 각 디바이스 세팅
// const setDevice = [
//   {type:'mobile', size:600, },
//   {type:'tablet', size:1024, },
//   {type:'laptop', size:1440, },
//   {type:'pc'}
// ];
const setDevice = [
  {size:768,type:'mobile',nav:'../temp/e_08_rwd_mob.html',  script:'../dist/rwd/e_08_rwd_nav_mobile.js' },
  {         type:'pc', nav:'../temp/e_08_rwd_pc.html',script:'../dist/rwd/e_08_rwd_nav_pc.js' }
];

const mediaSize =  `screen and (max-width:${setDevice[0].size}px)`;
const mediaMatches = window.matchMedia(mediaSize);

//------------------------------------------------------------------
//기능함수

const fnMkScript = (data)=>{
  const ckScript = document.querySelector('.navScipt');
  if(!!ckScript){ckScript.remove();}  

  const MkScript = document.createElement('script');
  MkScript.setAttribute('src',data);
  MkScript.setAttribute('class','navScript');
  elBody.append(MkScript);  
}

const fnCkHeader = (type = mediaMatches.matches)=>{
  let num =(type) ? 0 : 1; 
    // navtitle.after(NavBtn);
    // elBody.append(fnMkScript(setDevice[0].script) );    
    // elBody.append(fnMkScript(setDevice[1].script) );     
  fetch(setDevice[num].nav)
  .then(response => response.text())
  .then(data=>{NavBox.innerHTML=data})
  .then(()=>{fnMkScript(setDevice[num].script)})
};
fnCkHeader(mediaMatches.matches);

//------------------------------------------------------------------
//이벤트체크
mediaMatches.addEventListener('change',(e)=>{
  // location.reload();
  fnCkHeader(e.matches);
});

}
