import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from './NavBar.module.css'
import logo from '../../assets/logo.png'

const NavBar = ({ user, handleLogout }) => {
  const [navState, setNavState] = useState(false)

  const handleNavBtnClick = () => {
    setNavState(!navState)
  }

  return (
    <div id={style.mobileNav}>
      <div id={style.navHeader}>
        <img width="200px" src={logo} alt="FreshStart logo" />
        <button id={style.mobileMenuBtn} onClick={() => handleNavBtnClick()}>&#9776;</button>
      </div>
      {navState &&
      <nav id='mobileMenu'>
        {user ?
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/change-password">Change Password</Link></li>
          </ul>
        :
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        }
      </nav>
      }
    </div>
    
  )
}

export default NavBar
