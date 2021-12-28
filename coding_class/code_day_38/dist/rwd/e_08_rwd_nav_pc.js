//e_08_rwd_nav_pc.js

//1.navBox 내부의 gnb제목에 마우스 올릴경우 
//2.서브 내용이 각각 처리되게 만들기
//3.gnb의 자식인 li 벗어나면
//4.사라지게 만들기

//--------------------------------------------------
{
  
//변수
const navBox = document.querySelector('#navBox');
const gnb = navBox.querySelector('.gnb');
const elLi = gnb.children;
const elLiArr = [].slice.call(elLi);

const Option_name = 'on';


//이벤트 ---------------------------------------------
elLiArr.forEach((el,idx)=>{
  el.addEventListener('mouseenter', (e)=>{
    const Target = e.target;
    Target.classList.add(Option_name);
  });
  el.addEventListener('mouseleave',(e)=>{
    const elTarget = e.target;
    elTarget.classList.remove(Option_name);
  })

  const elLink = el.querySelector('.gnb_title').children[0];
  elLink.addEventListener('focus',(e)=>{
    const elTarget = e.target.parentNode.parentNode;
    //console.log(elTarget); a를 기준으로 부모의 부모
    elTarget.classList.add(Option_name);

    for(let i=0; i<elLiArr.length;i++){
      if(i !== idx){
        elLiArr[i] .classList.remove(Option_name);
      }else{
        elLiArr[i].classList.add(Option_name);
      }
    }
  });
  //.sub_list의 마지막 요소의 a에 focusout 또는 blur처리시 li에 on제거  
});

}

