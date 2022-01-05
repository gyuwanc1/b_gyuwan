// CardList.js
import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import '../style/CardList.scss';

// id
// 이미지 +이미지설명
// 제목
// 내용
//상세페이지주소




export default function CardList(){
  // ---------------------------------------------
  // const cardListData=;
  const [cardData, setCardData] = useState([]);

  useEffect( ()=>{
    axios.get('./data/cardListData.json')
    .then(res => setCardData(res.data) )
    .catch(console.log)
  },[] )



  // ---------------------------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className="card_wrap">
        {cardData.map((card)=> <Card data={card} key={card.id}/>)}        
      </ul>
    </div>
  )
  // ---------------------------------------------
} // CardList




