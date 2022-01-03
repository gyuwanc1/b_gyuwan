import Header from './Component/Header';
import ContentBox from './Component/content';
import Footer from './Component/Footer';
import './App.css';

function App() {
  const myName = 'gyuwanc';
  // -------------------------------------
  return (
    <div className="App">
      <Header 
        name={myName} 
        url="http://naver.com" />
      <ContentBox 
        name={myName} />  
      <Footer name={myName} />      
    </div>
  );
}

export default App;
