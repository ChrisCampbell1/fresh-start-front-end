import styles from './Discover.module.css'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import FeedFilter from '../../components/FeedFilter/FeedFilter'

const Discover = () => {
  const [profiles, setProfiles] = useState([])
  const [selectedJourneys, setSelectedJourneys] = useState([])
 
  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
    }
    fetchProfiles()
  }, [])

  useEffect(() => {
    setProfiles(profiles.filter(profile => profile.journeys.some(journey => selectedJourneys.includes(journey._id))))
  }, [])

  const handleJourneySelect = ({target}) => {
    
    setSelectedJourneys([target.name, ...selectedJourneys])
  }

  const handleClickFilter = ({target}) => {
    setProfiles(target.innerHTML === 'ASC' ? [...profiles.sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())] : [...profiles.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())])
  }


  return (  
    <div className={styles.container}>
      <h1>Discover</h1>
      <FeedFilter selectedJourneys={selectedJourneys} handleClickFilter={handleClickFilter} handleJourneySelect={handleJourneySelect}/>
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
