# CSS 정리
---
## CSS기본값
```CSS
@charset "UTF-8";  ----시작은 이렇게 시작

선택자 {}
@기능 () {}
-> @media screen and (min-width:320px) {}
-> @support (옵션) {}
@기능 {}
-> @animation 이름 {}
@기능 "역할"
-> @charset "UTF-8"
-> @import url ("data")

이러한 것들이 있다.

```
---
## psuedo-code
``` css
 psuedo는 가상의 코드이며 의사전달코드라고 한다.
 수행될 내용을 인간의 언어로 간략히 설명한 것이다.

선택자:hover -> 마우스를 올릴때
선택자:active -> 마우스를 클릭할 때
선택자:visited -> 방문한적이 있을 때 (a tag와 같이 사용)
선택자:focus -> 초점이 맞을때 (a, button, input)
선택자::before, after, both {content:;} -> 선택자의 내용의 앞에,뒤에,양쪽 전부
선택자:first-letter {} 선택내용의 첫글자
선택자:first-line {} 선택내용의 첫줄
```
---

## FLOAT
```css

  띄우는 것이라고 간략하게 표현
  block요소로써 옆으로 나열 한다.

  float:left 왼으로 나열
  flaot:right 오른으로 나열

  clear는 float의 기능을 해제하기 위해 사용
  ```
  ---

## hidden 
``` css
.blind { 
  overflow:hidden; width: 0; height: 0; 
  margin: 0; padding: 0;
}
```
---

## ABC:before,after
``` CSS
ABC:before,after {content:"ABC" display:block; float:left;}

ABC에 before, after를 사용하면, 요소값으로 변환 
display:block; 처리시 생성 되어있는 블럭안에 요소로 삽임된다.
```
---



