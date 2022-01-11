import { useState } from "react";

export default function Cardli (data){

  return(
    <li>
      <div className="imgBox"></div>
      <dl>
        <dt>{data.product}</dt>
        <dd>{data.narr}</dd>
      </dl>
    </li>
  )
}
