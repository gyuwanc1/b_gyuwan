//b_15_js_import_data_stateCheck.js

//외부의 문서를 불러오기
//1. 생성자함수 XMLHttpRequest();
//2.불러온 함수를 객체화
//3.객체내부의 메소드
//----------------------------------------------------
// 예외처리 : try{} catch(){} finally{}
// 4.상태메세지 처리: 연결상태가 어떠한 상태인지 체크 onreadystatechange(프로퍼티) 
//-----------------------------------------------------
//5. 문서를 찾아 열어주기: 변수.open( method(처리방식), url(연동주소), async(비동기처리허용 유무) )
//6. 문서를 처리: 변수.send() 
//-----------------------------------------
/*
var linkFn = function(url,method,async){
var http = new XMLHttpRequest(); //불러오기위한 기본적인 세팅
var stateMessage;

http.onreadystatechange = function(){
  console.log(http.status);
  switch(http.readyState){
    case XMLHttpRequest.UNSENT:
      stateMessage = '서버와의 테이터 연결 끊어짐'
      break;
    case XMLHttpRequest.OPENED :
      stateMessage = '서버연결'
      break;
    case XMLHttpRequest.HEADERS_RECEIVED:
      stateMessage = '서버접근중 파일검색중'
      break;
    case XMLHttpRequest.LOADING:
      stateMessage = '데이터 불러오는 중'
      break;
    case XMLHttpRequest.DONE:
      stateMessage='서버와 연결 대기중'
      break;
  }
  if(http.readyState === 4){
    console.log('서버가 이상없이 연결되었슴');
  }
  console.log(stateMessage);
}

var method = method || 'GET'; //앞의 자료가 언디파인드면 뒤의값 대체
var url = url;
var async = async || true;

http.open(method, url, async);
http.send();
}

//---------------------------------------------------------------
var method = 'GET';
var url = '../data/person_card.json';
var async = true;

linkFn(url,method,async);
*/

//==================================================================================

/*
var XHR= new XMLHttpRequest();

console.log(xhr.onreadystatechange); //준비상태의 변화를 감지
console.log(xhr.readyState); //준비상태

xhr.open('GET', '../data/person_card.json', true);//자료찾아서 신청
xhr.send();
*/
//================================================================================
/*fetch('../data/person_card.json').then(function(response){
  console.log( response.json());
})*/ //ES6에서 사용법

var xhr= new XMLHttpRequest();
xhr.open('GET', '../data/person_card.json', true);//자료찾아서 신청
xhr.send();

setTimeout(function(){
  var data =JSON.parse(xhr.responseText);
  var dataList = [];
  var SetFn = function(title, link){
    this.title = title
    this.url = link;
  };

  data.forEach(function(value,index){
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);
    dataList.push(obj);
  });

  console.log(dataList[0]);

},10)






