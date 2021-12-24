// d_12_rwd_matchMedia.js

//window.matchMedia('css크기를 그대로 옮겨놓은 형태').matches 
//matchMedia를 이용하여 해당규격에 일치하는지(matches) 판단
const wrap = document.querySelector('#wrap');
const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
mobile.remove();
pc.remove();

// const size = 'screen and (max-width:768px)';
// const mediaQuery = window.matchMedia(size);
// // console.log(mediaQuery);

// //지정규격과 체크해서 맞으면 true 아니면 false
// const fnCKMedia = ()=>{
//   if(mediaQuery.matches){
//     wrap.append(mobile);
//     pc.remove();
//   }else{
//     wrap.append(pc);
//     mobile.remove();
//   }
// };
// fnCKMedia();

// //------------------------
// //정해진크기규격(max-width:768px) 에서 변화할때 
// mediaQuery.addEventListener('change',(e)=>{
//   fnCKMedia();
// })
// window.addEventListener('change',(e)=>{
//   fnCKMedia();
// })

//이전버전에서는 무조건 브라우저의 크기가 변화할때마다(resize) 매번 확인해서 그 규격에 맞게 설정
//matchMedia는 최초의 설정된 크기를 기준으로 해당내용이 변경(change)되면 바로 확인하여 설정

//Question
const dataDevice = [
  { type: 'mobile' , size : 599},
  { type: 'tablet' , size : 767},
  { type: 'laptop' , size : 1439},
  { type: 'pc' }
]

// const mobile = window.matchMedia('screen and (max-width:599px)');
// const tablet = window.matchMedia('screen and (min-width:600px) and (max-width:767px)');
// const laptop = window.matchMedia('screen and (min-width:767px) and (max-width:1439px)');
// const pc = window.matchMedia('screen and (min-width:1440px)');

// const mediaArray = [mobile, tablet, laptop, pc];

//=================================================================================================

const mediaArray = [];
for(let i=0; i<dataDevice.length; i+=1){
  let matchCode;
  if(i === 0){
    matchCode = window.matchMedia(`screen and (max-width:${dataDevice[i].size}px)`);
  }else if( i === dataDevice.length - 1){
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px)`);
  }else{
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px) and (max-width:${dataDevice[i].size}px)`);
  }
  mediaArray.push(matchCode);
}

console.log( mediaArray );

// mobile.addEventListener ('change', e=>{
//   if(e.matches){console.log('현재 mobile규격');}
// })

// tablet.addEventListener ('change', e=>{
//   if(e.matches){console.log('현재 tablet규격');}
// })

// laptop.addEventListener ('change', e=>{
//   if(e.matches){console.log('현재 laptop규격');}
// })

// pc.addEventListener ('change', e=>{
//   if(e.matches){console.log('현재 pc규격');}
// })
const fnInsertCode = (type)=>{
  switch(type){
    case 'mobile':
    case 'tablet':
      wrap.append(mobile);
      pc.remove();
      break;
    case 'laptop':
    case 'pc':
      wrap.append(pc);
      mobile.remove();
      break;
  }
}

const fnCKDevice = (device, index)=> {
  if(device.matches){
  let type = dataDevice[index].type
  fnInsertCode(type);
  } 
}
mediaArray.forEach((type,index)=>{
  fnCKDevice(type,index);
})

mediaArray.forEach((type,index)=>{
  type.addEventListener('change', (e)=>{
    // if(e.matches){console.log(dataDevice[index].type)}
    fnCKDevice(e, index);
  });
})
