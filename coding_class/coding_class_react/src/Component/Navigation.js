import { NavLink } from "react-router-dom";

export default function Navigation (){
  const navList = [
    {content:"Main", href:"/"},  
    {content:"Review", href:"Review"},  
    {content:"CareList", href:"CardList"},  
    {content:"Product", href:"Product"},  
    {content:"EVENT", href:"event"},  
  ];

  return (
    <nav id="navBox">
        <h2 className="blind">navigation</h2>
        <ul>
          { navList.map( (nav, idx)=>{
            return (
            <li key={idx}>
              <NavLink className={({isActive})=> "box"+(isActive ? " on" : "") } to={nav.href}>{nav.content}</NavLink>
            </li>
            )
          }) }
        </ul>
      </nav>
  )
}