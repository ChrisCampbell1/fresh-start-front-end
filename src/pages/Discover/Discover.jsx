import styles from './Discover.module.css'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import DiscoverFilter from '../../components/DiscoverFilter/DiscoverFilter'

const Discover = () => {
  const [profiles, setProfiles] = useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])
 
  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
      setFilteredProfiles(data)
    }
    fetchProfiles()
  }, [])
  
  const handleSort = ({target}) => {
    setFilteredProfiles(target.innerHTML === 'ASC' ? [...filteredProfiles.sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())] : [...filteredProfiles.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())])
  }

  const handleFilter = ({target}) => {
    setFilteredProfiles(target.value ? profiles.filter(profile => profile.journeys.some(journey => journey._id === target.value)) : profiles)
  }

  return (  
    <div className={styles.container}>
      <h1>Discover</h1>
      <DiscoverFilter handleSort={handleSort} handleFilter={handleFilter}/>
      {profiles.length ?
        filteredProfiles.length ?
        filteredProfiles.map(profile =>
          <ProfileCard key={profile._id} profile={profile} />
        )
        :
        <>
          <div>No people on this journey yet...</div>
        </>
      :
      <>
        <div>Loading profiles...</div>
      </>
    }
    </div>
  )
}

export default Discover
