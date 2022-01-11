//header.js
import {Link, NavLink} from 'react-router-dom';
import '../style/Header.scss'
import Navigation from './Navigation';
export default function Header(){

  return(

    <header id="headBox">
      <h1>coffee</h1>
      <Navigation />
    </header>
  )
}