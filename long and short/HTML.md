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
```html

<id="id명">: id명을 페이지에 한번만 사용가능, 카멜표기법  #id명 { }
<class="class명"> 여러번 사용가능 하다. 언더바표기법 .class명 { } CSS 언어사용
동일한 속성을 두번쓰는 것은 오류, 같이 쓰려면은 한칸 띄우고 사용

순서: 제일처음부터 내용순서대로 작성
```
---

## Margin 과 padding
```html
margin:여백공간이라고 하며 시각적인 공간을 말한다.
padding: 본문과 박스사이의 공간을 말한다.
border-radius:테두리 R값을 말한다.
box-shadow: 그림자를 말한다.
```
---

## semantic 구조
``` html

semantic->별도의 능력 ,role 삭제 가능

요소
 * header: 최상위 부분
 * section: 목차, 주요광고
 * article: 웹페이지의 본문
 * footer: 최하단 copyright 및 company info
 * aside: 보조 광고

구형 browser는 인식을 못함

main->기피하는 영향이 있음

sction내에는 작은 웹 구성 가능
```
---























