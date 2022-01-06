import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import CardList from './Component/CardList';
import Review from './Component/Review.js';

import './App.css';

function App() {
  const title = 'site';

  return (
    <div className="App">
      <BrowserRouter>
        <Header heading={title} />
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/Review" element={ <Review /> } />
            <Route path="/CardList" element={ <CardList /> } />  
          </Routes>
        <Footer heading={title} />
      </BrowserRouter>
      

    </div>
  );
}



export default App;

//==============================

//   const style={backgroundColor:"#add",
//   color:"#fff",
//   padding:"1rem",
//   border:"1px solid #333"
// }
// // let  par = '변경전';
// const dataArr = [
//   '내용변경전','값이 변경되었습니다.'
// ]
// const [par, setPar] = useState(0);
// const pCng = (e)=>{
//   e.preventDefault();  
//   setPar(par+1)
// }

//함수형 리액트 문법
//1. 컴포넌트
//2. property명 : class => className, for => htmlFor
//3. js기능을 작성하는 위치 - return부분을 제외한 영역 ,jsx에서  { } 영역에서 사용
//4. 이벤트 핸들러 onClick, onChange, onFocus
//5. react Hook : 필요한 기능을 요구시 뽑아오는 것 
// 5 -1. useState: 변수의 값이 변경될때 그것을 재처리하기위한 기능
// 5 -2. useEffect: 변화할때마다 그변화를 체크, 필요데이터를 불러와서 확인 

