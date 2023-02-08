import styles from './DiscoverFilter.module.css'
import { useState, useEffect } from 'react'
import * as journeyService from '../../services/journeyService'

const DiscoverFilter = ({ handleSort, handleFilter, sortStatus }) => {
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
      <div className={styles.sort} onClick={handleSort}>
        <div>followers</div>
          {!sortStatus ?
            <i className="fas fa-regular fa-sort"></i>
            :
            sortStatus === 1 ?
              <i className="fas fa-solid fa-sort-down"></i>
              :
              <i className="fas fa-solid fa-sort-up"></i>       
          }
      </div>
      <select className={styles.filter} onChange={handleFilter}>
        <option value=''>Filter by Journey</option>
        {journeys.map(journey => (
          <option key={journey._id} value={journey._id}>{journey.name}</option>
        ))}
      </select>
    </div>
  )
}

export default DiscoverFilter
