# HTML 정리 #

---

## HTML기본 값 ##

```HTML
Default_code_값

<!DOCTYPE html>
<!--filename.html-->   ---------- 주석:파일의 이름
<html lang="ko-KR">    ---------- 언어설정
    <head>
        <meta charset="UTF-8">  ---------인코딩 언어속성 결정
        <meta http-equiv="X-UA-compatible" content="IE-edge"> ----비표준값,Browser최신버전설정
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        -------- 반응형 웹셋팅
        <title> title명</title>
        <!--style-->
        <style></style> 
    </head>
    <body>
        <!--layout--> -----html코드작성
        
        <!--script-->
        <script> </script> -----여러군데서 사용가능한 script언어
    </body>
   
</html>

```
---

## HTMl 구성 ##
```html
<html  lang =      "ko=KR" >
 tag   property     value
```
---

## style tag ##
```html
<style> 내용 </style> ----CSS/design 언어
/* 내용 */ -----CSS의 주석 (자바스크립트에서도 사용가능)
`body {}`---------------body에 무엇을 하겠습니다. 라는 뜻.

```
---


## script tag ##
```html
<script>
window.location="./html/내용.html";----작성하고 있는 문서 기준으로 "내용"의 문서로 이동
</script>
```
---

## H tag, 제목 ##
```html
<h1> 작성된 문서에서 가장 중요 </h1>
<h2> 작성된 문서에서 2번째로 중요 </h2>
<h3> 작성된 문서에서 3번째로 중요 </h3>
<h4> 작성된 문서에서 4번째로 중요 </h4>
<h5> 작성된 문서에서 5번째로 중요 </h5>
<h6> 작성된 문서에서 6번째로 중요, 내용문, 가장하위레벨 </h6>

** CSS언어로 강제로 변환 할 수 있음 **
```
---

## 다양한 HTML tag ##
```html
<br /> 줄바꿈
<hr /> 위의 내용과 아래내용의 흐름을 끊어줌
<p> </p> 내용, paragraph 문단을 의미하는 요소
<pre> </pre> 내용을 구성 하는 P와 유사한 기능
<address > </address>  기업의 주소, Copyright 등 웹페이지 하단의 내용표시  

<div> </div> block요소 묶음요소 많이 사용, 밑으로 쌓임
<span> </span> inline 요소 연속되는 한줄요소
**block안에 inline 가능, but inline안에 block요소 불가능**

<a href="내용">내용설명 </a> 링크 연결
<img src="내용" alt=> 이미지 연결
```
---

- ### ! a tag의 target property value ! ###
```html
* target="_self"----련재창에 링크된 페이지 열기
* target="_blank"----새로운 창에 링크된 페이지 열기
* target="_top"----가장 최상위 프레임에서 열기
* target="_parent"----현재프레임의 부모위치에서 열기
```


## 강조의 표현 tag ##
```html
<strong> 내용 </strong> ---- 강제성이 있는 강조 BOLD
<em> 내용 </em> ---- 권유의 강조
<del> 내용 </del> ---- 기존의 내용을 처리 완료
<ins> 내용 </ins> ---- 내용을 인식하게 하는 강조의 표현
<mark> 내용 </mark> ---- 형광펜 효과
<i></i> ---- 아이콘 이모티콘
```
---

## LIST ##
```html
<UL> </UL>----순서가 없는 리스트
<ol> </ol>----순서가 있는 리스트
<dl> 
    <dt> 
        <dd>  </dd> 
    </dt> 
</dl> ---- 제목이 있는 리스트

<ul>  </ul> 안에 <li> </li> 안에 <ul> </ul> ---- 다단리스트 최대3단계 권장,들여쓰기 필수
```
---
## ID와 CLASS ##
``` html

<id="id명">: id명을 페이지에 한번만 사용가능, 카멜표기법  #id명 { }
<class="class명"> 여러번 사용가능 하다. 언더바표기법 .class명 { } CSS 언어사용
동일한 속성을 두번쓰는 것은 오류, 같이 쓰려면은 한칸 띄우고 사용

순서: 제일처음부터 내용순서대로 작성
```
---

## Margin 과 padding
``` html
margin:여백공간이라고 하며 시각적인 공간을 말한다.
padding: 본문과 박스사이의 공간을 말한다.
border-radius:테두리 R값을 말한다.
vox-shadow: 그림자를 말한다.
```
---

## font setting ##
``` html

그래픽->16px=16pt

WEB-> 16px=12pt=1rem

소수점 6자리 기준으로 한다.

```
---

## 용어정리 ##
``` html

GnB : global navigation Bar

UnB : utility navigation Bar

```
---

## Head ##

``` html
h1 -> h2-> h3->
 h2가 없을 경우 nop name 

 각 구조의 단락 마다 h2를 작성 -> hidden처리한다.
 <h2 class="blind"> </h2> aria기법 CSS에서 hidden.
 ```
 ---
 
 ## 단락 계산 자동 완성 #3

``` html
ex) ul > li*5 {li_0$}
```
---

## flaot add summary 

``` html
float은 모든 요소를 Block 처리한다.
```
---

## background-clip ##
``` html
background-clip: 배경을 칠하는 범위
    content-box: 내용만 칠해라
    padding-box: padding범위 칠해라
    border-box: borderline을 칠해라
```
---

## 0929 class position ##
``` html
positon -> 적제 적소에 맞게 사용 (용도에 맞게)

* 성향
    static:가장 기본 값 (default), 위치설정하는 속성과 z-index기능 동작하지 않음
    realative:자신을 기준으로 처리하는 속성, 위치선정 속성을 사용해도 주변 요소에는 영향X
    absoloute:틀기준 부모 -> 아이(자식)
    fixed:고정, browse기준으로 처리
    sticky:다른조건필요

relative -> absolute ->기준이 어디냐에 따라 바뀜
absolute -> absolute (가능)

*기본틀 후 위치에 맞게 사용

position->블럭에 사용

위치설정: top,left,right,bottom
해당요소의 각 위치를 기준 ( top일 경우 상단을 기준, bottom일 경우 하단을 기준)
지정된 곳에서 위치설정

```
---

## 0930 class ##
``` html
형제 선택자

인접형제선택자:선택요소  바로 뒤에 오는 요소에는 +
형제선택자: 선택요소 뒤에오는 조건에 맞는 요소에는 ~

id,class 이름을 선정할때 ->ad,banner 뺄것

autofocus: 한번만 사용 가능, 구형browser에서는 사용불가.
```
---
## 10/1 Class TIL ##

-semantic 추가 내용 <br />

    Semantic 안에 header,article,footer을 넣을 수 있다.

    semantic 구조에서 웹페이지의 본문의 성격을 가지는 article/section의 형식은 내부에 다시
    header/article/section/nav/aside/footer (작은 web page)를 가질 수 있다.
    하지만 header/aside/footer/nav의 특정위치나 기능의 성향을 가지고 있는 요소는 내부에 
    section/article을 사용할 수 없다.
    header의 경우는 내부에 nav요소를 가질 수 있다.
---
### 특수tag  `<a> </a>`
``` html

<a href ="#"> </a> 는 inline 요소 이지만 a안에 div를 사용 할 수 있다.

<a href="#"><div></div></a>  이렇게 사용가능.
```
---

## 1004 TIL ##



h1의  text를 작성 할 때에는 소문자로 작성할것

CSS에서 text-transform:uppercase; word-spacing:-3px;로 대문자 표시

``` html
<ul> 
<li> </li>
</ul>
의 구조를 가질때에  UL의 사이즈 먼저 만들것!!
```
text의 색을 다르게 하려면?
``` html
text에 <span> </span>을 이용하여 색을 다르게 넣어준다.
```

input을 이용한 search bar 만들기
``` html

<div class="search_demo">
    <form action="연결문서">
        <fieldset>
            <legend>검색제목</legend>
            <label for="search">검색어를 입력하세요</label>
            <input type="text" value=""> id="search" 
            placeholber="검색어를 입력하세요>
            <button>검색</button>
        </fieldset>    
    </form>
</div
```
---












    
    

































