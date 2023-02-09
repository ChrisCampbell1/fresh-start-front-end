// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Discover from './pages/Discover/Discover'
import Journeys from './pages/Journeys/Journeys'
import Profile from './pages/Profile/Profile'
import NewPost from './pages/NewPost/NewPost'
import EditPost from './pages/EditPost/EditPost'
import PostDetails from './pages/PostDetails/PostDetails'
import JourneyDetails from './pages/JourneyDetails/JourneyDetails'
import EditJourney from './pages/EditJourney/EditJourney'
import NewJourney from './pages/NewJourney/NewJourney'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Footer from './components/Footer/Footer'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.getProfile(user.profile)
      setProfile(data)
    }
    user && fetchProfile()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} profile={profile} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} profile={profile}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/discover"
          element={
            <ProtectedRoute user={user}>
              <Discover />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/journeys"
          element={
            <ProtectedRoute user={user}>
              <Journeys user={user}/>
            </ProtectedRoute>
          }
        />
          <Route 
            path="/journeys/:id"
            element={
              <ProtectedRoute user={user}>
                <JourneyDetails user={user} profile={profile}/>
              </ProtectedRoute>
            }
          />
        <Route 
          path="/journeys/new"
          element={
            <ProtectedRoute user={user}>
              <NewJourney user={user}/>
            </ProtectedRoute>
          }
          />
        <Route 
          path="/journeys/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditJourney user={user}/>
            </ProtectedRoute>
          }
          />
        <Route 
          path="/posts/new"
          element={
            <ProtectedRoute user={user}>
              <NewPost user={user}/>
            </ProtectedRoute>
          }
          />
        <Route 
          path="/posts/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPost user={user}/>
            </ProtectedRoute>
          }
          />
        <Route 
          path="/posts/:id"
          element={
            <ProtectedRoute user={user}>
              <PostDetails user={user} profile={profile}/>
            </ProtectedRoute>
          }
          />
      </Routes>
      <Footer />
    </>
  )
}

export default App
