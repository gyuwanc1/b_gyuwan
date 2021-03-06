import { useState, useEffect } from "react";
import '../style/Review.scss';
import axios from 'axios';

export default function Review(){
  const [review, setReview] = useState('글자를 입력하세요.');
  const fnReviewChange = (e)=>{ setReview(e.target.value);};

  useEffect(()=>{
    // console.log(review);
  }, [review]);

  useEffect(async() => {    
    // fetch('/data/dataSample.json')
    // .then(res => res.json())
    // .then(console.log)
    
    const resolve = await fetch('/data/dataSample.json');
    const data = await resolve.json();
    // console.log(data);
  }, [])

  //useState() : 하나의 기능에서 변경될 내용을 적용하기 위한 함수 API
  //useEffect() : 상태체크(변화시 어떠한 기능을 확인체크), fetching 

  return(
    <div className="review_area">
      <form method="POST" action="#">
        <fieldset>
          <legend>리부작성</legend>
          <input id="reviewText" name="review__Text" onChange={fnReviewChange} />
          <p>{review}</p>
          {/* <button type="button">내용전송</button> */}
        </fieldset>
      </form>
    </div>
  )
}