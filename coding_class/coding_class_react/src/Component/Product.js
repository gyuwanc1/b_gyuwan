//product.js

import React,{useState, useEffect} from "react";
import ProductContent from './ProductContent';
import '../style/Product.scss'
import axios from "axios";

//---------------------------------------------



export default function Product(){

const [num, setNum] = useState(0);

const [menuData, setMenudata] = useState([]);

useEffect(()=>{
  axios.get('./data/menudata.json')
  .then(res=> setMenudata(res.data))
    // .then(()=>{ console.log(menuData)})  
},[])

  // let prCon = menuData[num]; 
  const code = menuData.filter((data, index)=>index ===num);

//---------------------------------------------
  return (
    <div className="product_area">
      <div className="btn_part">
        {/* <button type="button" onClick={(e)=>prCon=menuData[setNum(0)]}>Coffee</button>
        <button type="button" onClick={(e)=>prCon=menuData[setNum(1)]}>Drink</button> */}
      </div>
      {code.map(data => <ProductContent data = {code} />)}
      {/* {menuData.map (data=> <p key = {data.pageTitle}>{data.pageTitle}</p> )} */}

      {/* <ProductContent data={prCon}/> */}

    </div>
  )
}

