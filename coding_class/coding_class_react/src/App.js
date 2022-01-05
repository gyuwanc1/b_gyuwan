import React, { useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';

function App() {
  const title = 'site';

  const style={backgroundColor:"#add",
  color:"#fff",
  padding:"1rem",
  border:"1px solid #333"
}
// let  par = '변경전';
const dataArr = [
  '내용변경전','값이 변경되었습니다.'
]
const [par, setPar] = useState(0);
const pCng = (e)=>{
  e.preventDefault();  
  setPar(par+1)
}

  return (
    <div className="App">
      <button style={style} onClick={pCng}>클릭</button>
      <p>{par}</p>


      {/* <Header heading={title} />
      <Main />    
      <Footer heading={title} /> */}
    </div>
  );
}



export default App;
