import styles from './FeedFilter.module.css'
import { useState, useEffect } from 'react'
import * as journeyService from '../../services/journeyService'

const FeedFilter = ({ selectedJourneys, handleClickFilter, handleJourneySelect}) => {
  const [journeyFilter, setJourneyFilter] = useState(false)
  const [journeys, setJourneys] = useState([])

  useEffect(() => {
    const fetchJourneys = async () => {
      const data = await journeyService.index()
      setJourneys(data)
    }
    fetchJourneys()
  }, [])

  const handleOpenDropdown = () => {
    setJourneyFilter(!journeyFilter)
  }


  return (  
    <div className={styles.container}>
      <div className={styles.membershipSort}>
        <div onClick={(evt) => handleClickFilter(evt)}>ASC</div>
        <div>Member Since</div>
        <div onClick={(evt) => handleClickFilter(evt)}>DESC</div>
      </div>
      <div className={styles.journeyFilter}>
        <div className={styles.journeyDropdown} onClick={handleOpenDropdown}>Filter by Journey</div>
        {journeyFilter && (
          <div className={styles.journeyDropdownMenu}>
          {journeys.map(journey => (
            <div key={journey._id}>

            </div>
          ))}
        </div>
        )}
        
      </div>
    </div>
  )
}

export default FeedFilter
