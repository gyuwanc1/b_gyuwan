// e_06_responsive.js

//=================================================
/**
 * heade영역불러오기
 */

{
  const path = '../temp/'
  const headData ='rwd_header.html';

  const elbody =document.querySelector('body');
  const elHeadBox = document.querySelector('#headBox');
  const fnScript = ()=> {
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','../dist/rwd/rwd_import_nav.js')
    elbody.append(mkScript);
  }

  fetch(path+headData)
  .then(response=>response.text())
  .then((element) => {
    elHeadBox.innerHTML =element;
  })
  .then(()=>{
    fnScript();
  })
}