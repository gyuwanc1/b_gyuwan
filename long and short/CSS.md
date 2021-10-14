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

## 0930 css class ##
``` css
fixed 기준은 브라우져

relative를 사용 하면 사용된 요소가 기준이 됨. 

opacity -> block 안에 있는 내용까지 투명화 됨  

box-shadow : X Y blur
```
---

## 1001 ##
### position ###

``` css

positon:fixed를 사용할 경우 ->값 없이 Web page 기준으로 공중에 뜸

여기서 positon:fixed의 기준은 Browser, top, left 값 넣기를 잊지 말것.

** z-index ** -> 값없이 떠있는 fixed에 값을 줌.
```

e.g.  

<details>
<summary>눌러줘요</summary>

``` html
<div class="headerBox"> 
  <div class="headwrapper">
</div>
```
</details>
이러한 구조에서  headwrapper의 margin 값은 부모인 headBox의 기준 값을 따라간다.

e.g. header Box 단락에 position을 사용하면 다음 요소들은 position:fixed를 사용한 요소의 빈공간으로
올라간다.

therefore!! 

전체 #wrap의 CSS에 padding 과 margin을 사용한다.

---

## 1006

### font

Web에서는 woff,eot 확장자 사용

*family:선체 선택 속성 영문 대안 대중적이며 사용할 한글 등.

*font불러오기- 사용할 웹폰트가 없을경우.

  **weight:서체의 굵기

  **style: 서체의 기울기

 *line-height

 *text-transform

 *letter-spacing: 글자사이의 간격

*word-spacing: 단어사이의 간격

> *white-spacing : `nowrap`->평균적으로 많이 사용;<br />
> *overflow:hidden;<br />
> *text-overflow:ellipsis;<br />

*word-break

*text-overflow

---

## UNIT-단위


16px-12pt-100%-1em-1rem = Default

:root{} -기본셋팅 (reset.css 이전에 사용한다.) 
최초의 설정값만 잘하면 가능, 현재 최신 Browser에서 사용가능

@supports->최신기술, var(값)으로 전환 가능

---

## 1008 TIL ##

- 추가기능
    - tabindex property <br />
    기본으로 -1,0,1의 value 값을 가진다.
    deafult 값은 0이고 tabindex를 가지고 있는 요소는
    `a, button input, select textarea,form` 요소이다.  
    tabindex기능은 강제로 focus 처리를 가능하게 한다.

- ETC  
    - language:웹문서의 시작전에 인식되게 하여 처리하는 것이 좋다.
    - 각영역별로 의미가 있는 구로조 전환
    - 버튼,내용, 인디케이터 유사 요소끼리, 사용성을 기준으로
    쓰기 쉽게 그룹처리 및 순서 배치 잘할것.

--- 

## 1011 TIL position 복습 ##

- fixed:기준은 browser. 위치값이 없으면 자신의 부모요소에 붙어있다.
- sticky: 구형 browser의 대부분은 사용불가.
- relative: top,left,z-index (위치값)
- absolute:padding효과 X, border는 영향, 기준의 relative
- float을 사용하면 사이즈를 가질 수 있다.
- before,after 있는 그대로 보여줌
unitcode는 사용가능 하다.

- 구형은 `box-sizing` 안됨, `border` 안됨.

- `tabindex` = -1 제거
             = 0 포커스 기능 부여
             = 1 포커스 기능을 부여 하여 우선순위 기능 부여

- 접근성 원칙: 선택하고 ->이동하기 누르기!!

### js 작성 기초 ###
1. 만들고자 하는 것의 선정
1. 만들려는 형태의 기능
1. 만들려는 형태 구성
1. 만들려는 형태에 따른 기능의 목적 방향
1. 만들려는 형태를 내가 원하는 대로 그 순서를 파악해서 설명을 작성할 것.
1. 그 내용을 다시 순서대로 배열

---

## 1014 TIL  ##

* a요소는 형제요소가 없다. 

* nth-of-type ()은 같은 요소중에 몇번쨰  
* nth-child ()은 전제 중에 몇번째.  
---












