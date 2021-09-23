# 마크다운 사용 설명서

## 마크다운이란?

메모를 빠르게 정리하고 관리할 수 있도록 제작된 마크업 프로그램언어 <br />
<u>HTML문서를 개량</u> 하여 제작된 것이다.<br />
또 한 웹상의 워드 프로그램으로 불리운다.<br />
매우 직관적이며, 가볍고, <u>컴퓨터가 아니라 노트에 작성하여도 동일한 의미</u>를 파악 할 수 있다.

## 사용방법

### 제목 사용 방법
제목은 하나의 범위기준에서 제목(title)을 지정하는 것으로, 전체문서의 레벨을 맞추는 것  
heading1~6로 불리우며, 최대 6개까지 가능하다.


```markdown
 //h1-하나의 웹문서에서는 1번만 사용가능
 # heading1

 //h2
 ## heading2

 //h3
 ### heading3

 //4
 #### heading4

 //5
 ##### heading5

 //6
 ###### heading6
```
---
### 내용 사용방법

별도의 표기방법은 없으며, 단락(문장)을 구분하기 위해, 엔터를 두번 사용하여 구분한다<br />
단순 줄바꿈을 위해 ~~스페이스 두번사용으로처리~~ `<br />`을 이용한다.  

`>`를 이용하면,~~인용문의 역할을 하는 것~~ 내용에 대한 간략 설명으로 주로사용

``` markdown
 
  필요한 내용을 있는 그대로 표현

  문단이 다르면 엔터(2번)로 줄바꿈 처리, 줄바꿈은 `<br />`을 이용

  강조를 위해서, **굵은글씨** , *기울기* , <u>밑줄</u> , ~~취소~~ ,`<코드>`

  때로는, 해당하는 설명을 인용하기 위해 사용하는 표기법도 존재,
  
  `>` 를 이용하여 설명작성  
```

``` html 

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>~~~</title>
    <style>
      body { background-color:#fad; }

    </style>
  </head>
  <body>

  </body>
</html>
```

>내용을 설명을 설명하기 위한 코드   

---

### 목차사용법

- 지난시간의 내용 정리
    - Browser의 설치
    - git의 간략 사용법
    - figma 간략한 형태
    - vs code 설치 및 html 기본형태 파악

* 마크다운 사용법 이해
    1. 에디터 설치방법
    1. 인코딩 체크
    1. 제목작성
    1. 내용작성
    1. 강조표현
    1. 목차작성
    1. 코드작성

* [ ] 각종 에디터의 결과물 확인
* [ ] 블릿기호사용의 무엇이든 동일한 결과

---

### 필수 edit 프로그램 링크
 - [git hub](https://github.com/)
 - [vs code](https://code.visualstudio.com/)
 - [figma](https://www.figma.com/?fuid=)
 - [Typora](https://typora.io/)

---
### 필수 Browser 링크
 - [chrome](https://www.google.co.kr/chrome/?brand=IBEF&gclid=CjwKCAjwybyJBhBwEiwAvz4G72Z12NxMCqmVj9cVz0bZgz2pgSN-iGdOk2xms9cNlT0UngElK57ZahoCrH8QAvD_BwE&gclsrc=aw.ds)  
 - [Whale](https://whale.naver.com/ko/)
 - [Vivaldi](https://vivaldi.com/download/)
 - [Opera](https://www.opera.com/ko)

---

### 이미지
  ![랜덤이미지불러오기](https://picsum.photos/200/300) <br />
  ![주소: 우)14053 경기도 안양시 동안구 시민대로 235(관양동) 전화번호031-8045-7000](https://www.anyang.go.kr/main/contents.do?key=305) <br />

### ETC!!!!
 - 실제 HTML코드를 응용변경 하여 처리 <br />
    <img src="https://picsum.photos/200/300" alt="랜덤테스트 이미지" width="100"/>

 - 하이퍼링크  걸기 (html 코드 응용)<br />
 <a href="https://naver.com"
    style="color:#f04; font-weight:900; font-size:2rem">
    네이버로 이동
  </a>