import styles from './DiscoverFilter.module.css'
import { useState, useEffect } from 'react'
import * as journeyService from '../../services/journeyService'

const FeedFilter = ({ handleSort, handleFilter }) => {
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
        <div onClick={(evt) => handleSort(evt)}>ASC</div>
        <div>Member Since</div>
        <div onClick={(evt) => handleSort(evt)}>DESC</div>
      </div>
      <div className={styles.journeyFilter}>
          <select onChange={handleFilter}>
            <option value=''>Filter by Journey</option>
            {journeys.map(journey => (
              <option key={journey._id} value={journey._id}>{journey.name}</option>
            ))}
          </select>
      </div>
    </div>
  )
}

export default FeedFilter
