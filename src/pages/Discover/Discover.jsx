import styles from './Discover.module.css'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import DiscoverFilter from '../../components/DiscoverFilter/DiscoverFilter'

const Discover = () => {
  const [profiles, setProfiles] = useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])
  const [sortStatus, setSortStatus] = useState(null)
 
  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await profileService.getAllProfiles()
      setProfiles(data)
      setFilteredProfiles(data)
    }
    fetchProfiles()
  }, [])

  const handleSort = () => {
    setSortStatus(sortStatus ? sortStatus * -1 : 1)
    setFilteredProfiles(sortStatus === 1 ? [...filteredProfiles.sort((a, b) => a.followers.length - b.followers.length)] : [...filteredProfiles.sort((a, b) => b.followers.length - a.followers.length)])
  }

  const handleFilter = ({target}) => {
    setFilteredProfiles(target.value ? profiles.filter(profile => profile.journeys.some(journey => journey._id === target.value)) : profiles)
  }

  return (  
    <div className={styles.container}>
      <h1>Discover</h1>
      <DiscoverFilter handleSort={handleSort} handleFilter={handleFilter} sortStatus={sortStatus} />
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
