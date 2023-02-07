import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from './NavBar.module.css'
import logo from '../../assets/logo.png'

const NavBar = ({ user, handleLogout }) => {
  const [navState, setNavState] = useState(false)

  const handleNavBtnClick = () => {
    setNavState(!navState)
  }

  const publicLinks = (
    <ul>
      <li><Link onClick={() => handleNavBtnClick()} to="/login">Log In</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/signup">Sign Up</Link></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><Link onClick={() => handleNavBtnClick()} to="/">Feed</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/discover">Discover</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/posts/new">New Post</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/journeys">Journeys</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to={`/profiles/${user?.profile}`}>My Profile</Link></li>
      <li><Link  to="" onClick={handleLogout}>LOG OUT</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/change-password">Change Password</Link></li>
  </ul>
  )
  return (
    <div id={style.mobileNav}>
      <div id={style.navHeader}>
        <img width="200px" src={logo} alt="FreshStart logo" />
        <button id={style.mobileMenuBtn} onClick={() => handleNavBtnClick()}>&#9776;</button>
      </div>
      {navState &&
      <nav id='mobileMenu'>
        {user ?
          protectedLinks
        :
          publicLinks
        }
      </nav>
      }
    </div>
    
  )
}

export default NavBar
