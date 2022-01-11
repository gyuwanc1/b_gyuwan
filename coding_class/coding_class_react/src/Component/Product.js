//product.js

import React,{useState} from "react";
import '../style/Product.scss'

//---------------------------------------------



export default function Product(){

const [num, setNum] = useState(0);

const menuData =    
[
  {
  "pageTitle": "coffee",
  "pageContent" : "Coffee 내용에 따른 설명",
  "products": [
    {"product":"americano" , "narr": "americano 설명"},
    {"product":"lattte" , "narr": "lattte 설명"},
    {"product":"cafemocha" , "narr": "cafemocha 설명"},
    {"product":"apogatto" , "narr": "apogatto 설명"},
    {"product":"espresso" , "narr": "espresso 설명"}
  ]
  },
  {
  "pageTitle": "drink",
  "pageContent" : "drink 내용에 따른 설명",
  "products": [
    {"product":"orange" , "narr": "americano 설명"},
    {"product":"포도" , "narr": "lattte 설명"},
    {"product":"kiwi" , "narr": "cafemocha 설명"},
    {"product":"banana" , "narr": "apogatto 설명"}    
  ]
  }
  ]
  

  
  let prCon = menuData[num]; 

//---------------------------------------------
  return (
    <div className="product_area">
      <div className="btn_part">
        <button type="button" onClick={(e)=>prCon=menuData[setNum(0)]}>Coffee</button>
        <button type="button" onClick={(e)=>prCon=menuData[setNum(1)]}>Drink</button>
      </div>
      

      <div className="content_part">
        <h2>{prCon.pageTitle}</h2>
        <p>{prCon.pageContent}</p>
          <ul>
            {prCon.products.map((pr, idx) => (
              <li key={idx}>
                <dl>
                  <dt>{pr.product}</dt>
                  <dd>{pr.narr}</dd>
                </dl>
              </li>
              )
            )}          
          </ul>
        </div>
    </div>
  )
}

