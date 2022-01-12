//Event.js

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {MdExpandMore} from 'react-icons/md'
import '../style/Event.scss'
import axios from 'axios'
import EventLi from './EventLi'

export default function Event() {

  const [dataList, setDataList] = useState([]);
  const [num, setNum] = useState(5);
  //data불러오기
  const dataUrl = './data/eventList.json';
  
  useEffect(()=>{
    // axios.get(dataUrl).then(res => setDataList(res.data) );
    (async ()=>{
      const res = await axios.get(dataUrl);
                  setDataList(res.data);
    })()
  },[])

  const fnPlusNum = () => { setNum(num + 5); }
  const viewData = dataList.filter((data, i)=>i < num );

  return (
    <article className='event_area'>
      <h2>Event</h2>
      <ul>
        {viewData.map( (view ,idx) =>  <EventLi key={idx} data={view} /> ) }
      </ul>

      <div className='more_btn'>
        <button type="button" onClick={fnPlusNum}> 
          <MdExpandMore /> 
          <span className='blind'>더보기</span>
        </button>
      </div>
    </article>
  )
}
