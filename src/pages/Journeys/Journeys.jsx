import styles from './Journeys.module.css'
import * as journeyService from '../../services/journeyService'
import { useState, useEffect } from 'react'
import JourneyCard from '../../components/JourneyCard/JourneyCard'

const Journeys = () => {
  const [journeys, setJourneys] = useState([])

  useEffect(() => {
    const fetchJourneys = async () => {
      const data = await journeyService.index()
      setJourneys(data)
    }
    fetchJourneys()
  }, [])
  
  return (  
    <main className={styles.container}>
      {journeys.map(journey => 
        <JourneyCard key={journey._id} journey={journey}/>  
      )}
    </main>
  )
}

export default Journeys
