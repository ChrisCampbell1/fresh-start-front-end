import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import style from './NavBar.module.css'
import logo from '../../assets/logo.png'

const NavBar = ({ user, handleLogout, profile }) => {
  const [navState, setNavState] = useState(false)

  //Section for hanlders
  const handleNavBtnClick = () => {
    setNavState(!navState)
  }
  //Section for useEffects
  useEffect(() => {
    setNavState(false)
    }, [user])
  


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
      <li><Link onClick={() => handleNavBtnClick()} to="/journeys">Journeys</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/posts/new">New Post</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to={`/profiles/${user?.profile}`}>My Profile</Link></li>
      <li><Link onClick={() => handleNavBtnClick()} to="/change-password">Change Password</Link></li>
      <li><Link onClick={handleLogout} to="/">Log Out</Link></li>
  </ul>
  )

  return (
    <div id={style.mobileNav}>
      <div id={style.navHeader}>
        {user ?
          <Link to={`/profiles/${user?.profile}`}><img id={style.profilePhoto} src={profile.photo} alt={profile.name} /></Link>
          :
          <div id={style.profilePhoto}></div>
        }
        <Link to="/"><img id={style.logo} src={logo} alt="FreshStart logo" /></Link>
        <i id={style.mobileMenuBtn} onClick={handleNavBtnClick} className="fas fa-solid fa-bars fa-2xl"></i>
      </div>
      {navState &&
      <nav id={style.mobileMenu}>
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
