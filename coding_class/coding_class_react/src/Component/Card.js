//card.js
import { MdFavorite } from 'react-icons/md';

export default function Card({data}){
  return(
  <li>
    <div 
      className="img_set" 
      style={{backgroundColor:data.imgUrl}} > {data.imagAlt}
    </div>
    <dl>
      <dt>{data.title}</dt>
      <dd>{data.content}</dd>
    </dl>
    <div className="btns">
      <button type="button">좋아요 <MdFavorite /></button>
      <a className="link" href={data.detailLink}>상세보기</a>
    </div>

  </li>
  )
}