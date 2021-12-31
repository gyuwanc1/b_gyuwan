//d_13_class3.js

// 1.promise
// 2. fetch
// 3. async/await

//콜백함수->콜백지옥->해석이 매우 어렵다.

//()->()->()->() 순차적으로 표현
//promise는 순서대로 진행할 수 있도록, 어떤한 작업의 원활한 진행을 위해 

// 생성자함수<==new Promise( (a,b)=>{} )

const fnFirst = ()=>{
  return new Promise((success, fail)=>{
  setTimeout(()=>{
    //작업,작업,작업
    success('작업이 종료되었습니다. 다음을 수행해도 됩니다.');
    }, 1000);
  });
};

fnFirst()
.then((fnResult)=>{
  console.log(fnResult)
  return fnResult
})
.then((data)=>{
  console.log(data);
})
//순차진행 가독성 
// 에러처리. catch() 여튼 수행.finally()
//----------------------------------------

const elHead = document.querySelector('head');
const elBody = document.querySelector('body');
const tempSlide = document.querySelector('.temp')
const slidData = '../temp/slide_area2.html';

fetch(slidData)
.then((importText)=>{return importText.text();})
.then((data)=>{
  let mkBox = document.createElement('div');
  mkBox.setAttribute('class','box');
  mkBox.innerHTML =data;
  tempSlide.append(mkBox);
})
.then(()=>{
const elHead =  document.querySelector('head');
let ellink = document.createElement('link');
ellink.setAttribute('rel', 'styleSheet');
ellink.setAttribute('href', '../css/src/e_02_slide_area.css');
elHead.append(ellink);
})
.then(()=>{
  let elScript = document.createElement('script');
  elScript.setAttribute('src','../dist/src/e_02_slide_area.js');
  elBody.append(elScript);
})