import React from 'react';
import '../style/Company.scss';
import ManualStyle from'../style/Manual.module.scss';
import PersonStyle from '../style/Person.module.scss';

// export default function Company() {
//   return (
//     <div>
//       manual, person, rule, etc
//     </div>
//   )
// }

export function Manual(){
  return (
  <div  className="company_area">
    <h2 className={ManualStyle.title}>Manual</h2>
    <p>무언가 내용작성</p>
  </div>
  )
};
export function Person(){
  return ( 
  <div  className="company_area">
    <h2 className={PersonStyle.title}>Person</h2>
    <p>무언가 내용작성</p>
  </div>
  )
};
export function Rule(){
  return ( 
  <div  className="company_area">
    <h2>rule</h2>
    <p>무언가 내용작성</p>
  </div>
  )
};
export function Etc(){
  return ( 
  <div  className="company_area">
    <h2>Etc</h2>
    <p>무언가 내용작성</p>
  </div>
  )
};