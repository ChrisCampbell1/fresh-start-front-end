import styles from './Profile.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'

import Icon from '../../components/Icon/Icon'
import PostCard from '../../components/PostCard/PostCard'
import defaultProfilePhoto from '../../assets/profile.png'


const Profile = (props) => {
  const [profile, setProfile] = useState({})
  const [isFollowing, setIsFollowing] = useState(false)
  const { profileId } = useParams()

   //Section for useEffect
  useEffect(() => {
    const fetchProfile = async (profileId) => {
      const profileData = await profileService.getProfile(profileId)
      setProfile(profileData)
    }
    fetchProfile(profileId)
  }, [profileId,isFollowing])

  useEffect(() => {
    setIsFollowing(
      profile.followers && profile.followers.some(follower => follower._id === props.user.profile)
    )
  }, [profile.followers, props.user.profile])

  //Section for handlers
  const handleFollow = async () => {
    if (!isFollowing) {
      await profileService.follow(profile._id);
      setIsFollowing(true)
    } else {
      await profileService.unfollow(profile._id);
      setIsFollowing(false)
    }
  }

  return (  
    <main className={styles.container}>
      {profile._id ? 
        <>
          <div className={styles.profile}>
            <h1>{profile.name}</h1>
            <div>
              {
                profileId !== props.user.profile ?
                <button id={styles.followBtn} onClick={handleFollow}>
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>
                : null
              }
            </div>
            <img className={styles.profilePhoto} src={profile.photo ? profile.photo : defaultProfilePhoto} alt={profile.name} />
            <section className={styles.stats}>
                <div className={styles.followStats}>
                  <div>
                    <Icon category="Follower"/>
                    <span>{profile.followers.length}</span>
                  </div>
                  <div>
                    <Icon category="Following"/>
                    <span>{profile.following.length}</span>
                  </div>
                </div>
                <div className={styles.journeys}>
                    <span><strong>journeys:</strong></span>
                    {profile.journeys.length ?
                      profile.journeys.map(journey => (
                        <span key={journey._id}>{journey.name}</span>
                      ))
                      :
                      <span>No journeys yet...</span>
                      }
                </div>
            </section>
          </div>
          <section className={styles.posts}>
              {profile.posts.length ?
                profile.posts.slice(0).reverse().map(post => (
                  <PostCard key={post._id} post={post} user={props.user} />
                ))
                :
                <li>No posts yet...</li>
              }
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
