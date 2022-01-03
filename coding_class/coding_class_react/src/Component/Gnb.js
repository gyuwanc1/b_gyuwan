//Gnb.js

export default function Gnb(){
  const navLists = ['about','product','gallery','notice'];
  return (
    <nav className="gnb">
      <h2>navigation</h2>
      <ul>
        {/* <li><a href="/about">about</a></li>
        <li><a href="/product">product</a></li>
        <li><a href="/gallery">gallery</a></li>
        <li><a href="/notice">notice</a></li> */}
        { navLists.map( (li, idx) => <li key={idx}>{li}</li> )}    
        {/* map은 forEach와 같은 형태로 idx를 해당하는 요소 KEY=idx 로하여 작성해준다      */}
      </ul>
    </nav>
  )
}