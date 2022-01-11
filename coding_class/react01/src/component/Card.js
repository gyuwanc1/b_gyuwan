// Card.js
import { useEffect, useState} from 'react';
import axios from 'axios';
import Cardli from './Cardli';
import '../style/Card.scss'

export default function Card (){

  const [cardData, setData] = useState([]);

  useEffect(()=>{
    axios.get('./data/menudata.json')
    .then(res => setData(res.data))
  },[])

  return (
    <div className="card_area">
      <ul className="card_wrap">
        {cardData.map((card, idx)=> <Cardli data={card} key={idx} />)}        
      </ul>
    </div>
  )
}