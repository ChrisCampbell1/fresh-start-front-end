import styles from './JourneyDetails.module.css'
import * as journeyService from '../../services/journeyService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const JourneyDetails = () => {
  let {id} = useParams()
  console.log(id, "params")
  
  const [journey, setJourney] = useState({})

  useEffect(() => {
    const fetchJourney = async () => {
      const data = await journeyService.show(id)
      setJourney(data)
    }
    fetchJourney()
  }, [id])
  
  return (  
    <main className={styles.container}>
      <h1>This is the JourneyDetails page</h1>
    </main>
  )
}

export default JourneyDetails
