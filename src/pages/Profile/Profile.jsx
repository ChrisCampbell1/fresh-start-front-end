import styles from './Profile.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'
// import { login, logout } from '../../services/authService'

import Icon from '../../components/Icon/Icon'
import PostCard from '../../components/PostCard/PostCard'


const Profile = () => {
  const [profile, setProfile] = useState({})

  const { profileId } = useParams()

  useEffect(() => {
    const fetchProfile = async (profileId) => {
      const profileData = await profileService.getProfile(profileId)
      console.log(profileData)
      setProfile(profileData)
    }
    fetchProfile(profileId)
  }, [])

  return (  
    <main className={styles.container}>
      {profile._id ? 
        <>
          <img src={profile.photo} alt={profile.name} />
          <h3>{profile.name}</h3>
          <section className={styles.stats}>
              <ul>
                <li>
                  <Icon category="Fitness"/>
                  <span>followers: {profile.followers.length}</span>
                </li>
                <li>
                  <Icon category="Food"/>
                  <span>following: {profile.following.length}</span>
                </li>
                <li>
                  <span>journey list:</span>
                  <ul>
                    {profile.journeys.length ?
                      profile.journeys.map(journey => (
                        <li>{journey.name}</li>
                      ))
                      :
                      <li>No journeys yet...</li>
                    }
                  </ul>
                </li>
              </ul>
          </section>
          <section className={styles.posts}>
            <h4>posts</h4>
            <ul>
              {profile.posts.length ?
                profile.posts.map(post => (
                  <PostCard post={post} />
                ))
                :
                <li>No posts yet...</li>
              }
            </ul>
          </section>
        </>
        :
        <>
          <h1>Loading profile...</h1>
        </>
      }  
    </main>
  )
}

export default Profile
