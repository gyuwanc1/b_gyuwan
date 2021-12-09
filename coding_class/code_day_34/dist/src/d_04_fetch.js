//d_04_fetch.js

//기존 data불러오기 : XMLHttpRequest()




// http.open ('GET','../data/pserson_card.json',true);
// http.send();
//버튼 클릭시 관련 자료만 모아서 pre요소에 담기

// //변수:
// const http = new XMLHttpRequest();
// const elBtn  =  document.querySelector('button');
// const elPre = document.querySelector('pre');

// //기능 함수
// const dataList = function(){
//   http.open('GET','../data/person_card.json',true);
//   http.onreadystatechange = function(){
//    const state =  http.readyState;
//    if(state === XMLHttpRequest.DONE){
//      const sta = http.status;
//      if( sta >=200 && sta < 400){
//        //console.log(http.responseText);
//       //  return http.response;
//       elPre.innerText = http.response;
//      }
//     }

//   }
//   http.send();
// }

// //이벤트
// // elBtn.addEventListener('click', function(e){
// //   e.preventDefault();
// //   dataList();
//   //console.log( getData);
// })

//----------------------------------------------------------
const elBtn  =  document.querySelector('button');
const elPre = document.querySelector('pre');
let url = "../data/person_card.json";

const fnFetch = function(path){

  fetch(path).then(function(response){
    return response.json();
  })  .then(function(data){
      // elPre.innerText =JSON.stringify(data)
    });
};

elBtn.addEventListener('click', function(e){
  e.preventDefault();
  fnFetch();
})

