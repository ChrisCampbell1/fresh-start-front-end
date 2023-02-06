// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
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

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

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
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <Profile />
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
              <Journeys />
            </ProtectedRoute>
          }
        />
          <Route 
            path="/journeys/:id"
            element={
              <ProtectedRoute user={user}>
                <JourneyDetails />
              </ProtectedRoute>
            }
          />
        <Route 
          path="/journeys/new"
          element={
            <ProtectedRoute user={user}>
              <NewJourney />
            </ProtectedRoute>
          }
          />
        <Route 
          path="/journeys/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditJourney />
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
              <EditPost />
            </ProtectedRoute>
          }
          />
        <Route 
          path="/posts/:id"
          element={
            <ProtectedRoute user={user}>
              <PostDetails user={user}/>
            </ProtectedRoute>
          }
          />
      </Routes>
    </>
  )
}

export default App
