import styles from './Discover.module.css'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import FeedFilter from '../../components/FeedFilter/FeedFilter'

const Discover = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchProfiles()
  }, [])

  return (  
    <div className={styles.container}>
      <h1>Discover</h1>
      <FeedFilter />
      {profiles.length ?
        profiles.map(profile =>
          <ProfileCard key={profile._id} profile={profile} />
        )
      :
      <>
        <div>Loading profiles...</div>
      </>
    }
    </div>
  )
}

export default Discover
