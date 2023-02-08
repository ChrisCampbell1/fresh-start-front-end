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
          <h1>{profile.name}</h1>
          <div>
            {
              profileId !== props.user.profile ?
              <button onClick={handleFollow}>
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
              : null
            }
          </div>
          
          <img className={styles.profilePhoto} src={profile.photo ? profile.photo : defaultProfilePhoto} alt={profile.name} />
          <section className={styles.stats}>
              <ul>
                <li>
                  <Icon category="Follower"/>
                  <span>followers: {profile.followers.length}</span>
                </li>
                <li>
                  <Icon category="Following"/>
                  <span>following: {profile.following.length}</span>
                </li>
                <li>
                  <span>journey list:</span>
                  <ul>
                    {profile.journeys.length ?
                      profile.journeys.map(journey => (
                        <li key={journey._id}>{journey.name}</li>
                      ))
                      :
                      <li>No journeys yet...</li>
                    }
                  </ul>
                </li>
              </ul>
          </section>
          <section className={styles.posts}>
            <h4>Recent Posts</h4>
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
