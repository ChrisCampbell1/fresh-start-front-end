import styles from './Discover.module.css'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import FeedFilter from '../../components/FeedFilter/FeedFilter'
import { login } from '../../services/authService'

const Discover = () => {
  const [profiles, setProfiles] = useState([])

  const handleClickFilter = ({target}) => {
    const sortedProfiles = target.innerHTML === 'ASC' ? [...profiles.sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())] : [...profiles.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())]
    setProfiles(sortedProfiles)
  }

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
      <FeedFilter profiles={profiles} handleClickFilter={handleClickFilter} />
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
