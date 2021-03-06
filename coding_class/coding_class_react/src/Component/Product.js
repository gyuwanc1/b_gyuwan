//product.js

import React,{useState, useEffect} from "react";
import ProductContent from './ProductContent';
import '../style/Product.scss'
import axios from "axios";

//---------------------------------------------



export default function Product() {
  const [num, setNum] = useState(0);
  const [menuData, setMenuData] = useState([]);

  useEffect(()=>{
    axios.get('./data/menuData.json')
    .then(res=>  setMenuData(res.data) )
  }, [])
  const fnTab = (e, i)=>{
    e.preventDefault();
    setNum(i);
  }

  const code = menuData.filter( (data, index) => index === num );  
  // ------------------------------------------
  return (
    <div className='product_area'>
      <div className="btn_part">
        {/* <button type="button" onClick={(e)=> fnTab(e, 0) }>Coffee</button>
        <button type="button" onClick={(e)=> fnTab(e, 1) }>Drink</button> */}
        { menuData.map((data,idx)=> 
            <button 
              key={data.pageTitle} type="button" onClick={(e)=> fnTab(e, idx)}>
                {data.pageTitle}
            </button>) }
      </div>
      {code.map( (data,idx) => <ProductContent key={idx} data={data} /> )}
    </div>
  )}

