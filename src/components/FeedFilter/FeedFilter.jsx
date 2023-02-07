import styles from './FeedFilter.module.css'
import { useState, useEffect } from 'react'
import * as journeyService from '../../services/journeyService'


// journeys


const FeedFilter = ({ selectedJourneys, handleClickFilter, handleJourneySelect}) => {
  const [journeys, setJourneys] = useState([])


  useEffect(() => {
    const fetchJourneys = async () => {
      const data = await journeyService.index()
      setJourneys(data)
    }
    fetchJourneys()
  }, [])

  return (  
    <div className={styles.container}>
      <div className={styles.membershipSort}>
        <span onClick={(evt) => handleClickFilter(evt)}>ASC</span>
        <span>Member Since</span>
        <span onClick={(evt) => handleClickFilter(evt)}>DESC</span>
      </div>
      <div className={styles.journeyFilter}>
        <div>
          {selectedJourneys.map(selectedJourney => (
            <div key={selectedJourney}>{journeys.find(journey => journey._id === selectedJourney).name}</div>
          ))}
        </div>
        <select onChange={(evt) => handleJourneySelect(evt)}>
          <option>Filter by Journey</option>
          {journeys.length &&
            journeys.map(journey => (
              <option key={journey._id} value={journey._id}>{journey.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FeedFilter
