// Naviigation.js
import { Link, NavLink } from "react-router-dom"

export default function Navigation(){

  return (
    <nav id="navBox">
        <h2 className="blind">navigation</h2>
        <ul>
          <li><Link to="#">about</Link></li>
          <li><Link to="#">product</Link></li>
          <li><Link to="#">gallery</Link></li>
          <li><Link to="#">notice</Link></li>
        </ul>
    </nav>
  )
}
