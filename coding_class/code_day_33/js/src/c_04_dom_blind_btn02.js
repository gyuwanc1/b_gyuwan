
// var jsBtn= document.querySelector('.btn');
// var jsCloseBtn = jsBtn.querySelector('.close');
// var jsOpenBtn = jsBtn.querySelector('.open');
// var jsOpenBtn2 = jsBtn.querySelector('.open2');
// var jsContentArea = document.querySelector('.content_area');
// //---------------------------------------------
// var conH=getComputedStyle(jsContentArea).height;
// var conHResult = parseInt(conH);
// var timed = 5;
// var slideH;
// //함수----------------------------------------------
// var slideUpFn = function(height){
//   var setH = height;
//   slideH = setInterval(function(){
//     setH -= 1;    
//     (setH >= 0) ? jsContentArea.style.height = setH + 'px' : clearInterval(slideH) ;
//   },timed/100);
// }


// //jsCloserBtn클릭 이벤트
// jsCloseBtn.addEventListener('click', function(event){
//   event.preventDefault();
//   slideUpFn(conHResult);
// });

// javascript를 이용하여, 
// 버튼 클릭시 높이값이 0이 되도록처리
  // - 높이값을 먼저 파악, 최종 값이 0값
  // - 클릭시 기능 수행( 단, 기본기능 삭제 )
// 높이가 0이면, display:none;
  // - if()이용하여 0값으로 처리되었는지 체크
  // display:none 일 경우, 차후의 처리를 위해 style기능을 제거할지 파악

// ----------------------------------------
var jsBtn         = document.querySelector('.btn');
var jsCloseBtn    = jsBtn.querySelector('.close');
var jsOpenBtn     = jsBtn.querySelector('.open');
var jsOpenBtn2    = jsBtn.querySelector('.open2');
var jsToggleBtn = jsOpenBtn2;
var jsContentArea = document.querySelector('.content_area');
// -----------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
var timed = 500;
var slideH;
// 함수 --------------------------------------------
var permission = true;
var slideUpFn = function(height){
  if(permission){
    permission = false;
    var setH = height;
  // console.log( setH );
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px';
    }else{
      clearInterval(slideH);
      jsContentArea.style = null;
      jsContentArea.style.display = 'none';
      permission = true;
    }
  }, timed/100);
  }
};

//=-------------------------------------------
//함수2. 슬라이드 기능으로 나타나는 기능-----------------------------------------------------
var countFn = function(n){
   //setTimeout 일정시간 뒤에 한번만 수행
   //setinterval 일정시간 마다 수행- clearInterval
   var arr = [2,4,7,10, 20, 30, 50, 90, 432, 654, 777, 963];

   var red, green, blue;
   setTimeout( function(){
     red = (Math.floor(Math.random() * 256)).toString(16);
     green = (Math.floor(Math.random() * 256)).toString(16);
     blue = (Math.floor(Math.random() * 256)).toString(16);

     if( red.length   !== 2)  { red   = '0' + red;   }
     if( green.length !== 2)  { green = '0' + green; }
     if( blue.length  !== 2) { blue   = '0' + blue;  }
     console.log( red+green+blue );  
     var randomColor = '#'+red+green+blue;

     // var ram = Math.floor( Math.random()*12 )
     // console.log( arr[ram] );
     jsContentArea.style.backgroundColor = randomColor;
   },500);
  };

// --------------------------------------------
//함수샘플:setInterval/setTimeout 슬라이드 기능 테스트-------

//함수2:open버튼 클릭시 사라진 내용을 나타나게 만들기------
//jsContentArea 상태가 'none'일때, 'block'으로 처리와 동시에 
//기본높이값을 파악후(conH, conHResult에서 이미파악) -> 높이 0 부터 기본높이값까지 1씩 추가해서 변동되게 수행
//필요한 높이만큼 수행 되었다면, 더이상 처리할 내용이 없으니, style 기능제거(null),
//단, 기능이 수행되는 중간에 다른기능을 첨부하지 못하게 제어(permission)
var slideDownFn = function(baseHeight){
  var originH = baseHeight;
  var setH = 0;
  var jsDisplayState = getComputedStyle(jsContentArea).display === 'none'; //상태체크
  if(permission && jsDisplayState){
    permission = false;
    jsContentArea.style.display = 'block';
    jsContentArea.style.height = setH; 

    slideH = setInterval(function(){
      if(setH < originH){
        setH += 1;
        jsContentArea.style.height = setH + 'px'; 
        console.log('높이값변경중:', setH);
      }else{
        // jsContentArea.style = null;
        permission = true;
        console.log('높이값 처리 완료');
        clearInterval(slideH);        
      }
    }, timed/1000); 
  } 
}; // slideDownFn(baseHeight)
//-----------------------------------------------------------
// jsCloseBtn클릭 이벤트
jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);  
});

//jsOpenBtn 클릭 이벤트
jsOpenBtn.addEventListener('click', function(event){
  event.preventDefault();
  // countFn(0);
});

jsContentArea.classList.add('on');

//jsToggleBtn 클릭이벤트
jsToggleBtn.addEventListener ( 'click', function(event){
  event.preventDefault();
  // var onState = jsContentArea.classList.contains('on') 
  // if(onState){
  //   // console.log('현재 내용이 보이는 상태입니다.')
  //   slideUpFn(conHResult);
  //   jsContentArea.classList.remove('on');
  // }else{
  //   // console.log('현재 내용이 보이지 않습니다.');
  //   slideDownFn(conHResult);
  //   jsContentArea.classList.add('on');
  // }

  var viewState = getComputedStyle(jsContentArea).display ==='block';
  (viewState) ? slideUpFn(conHResult):slideDownFn(conHResult); 
});

// -------------------------------------------------------------------------
// 과제: modal window 만들기 (하나의box만) : 샘플사이트 http://fancybox.net/
// opacity:100%; -> opacity:0; display:none;
// display:block; -> opacity:100%; 


