import styles from './Journeys.module.css'
import * as journeyService from '../../services/journeyService'
import { useState, useEffect } from 'react'
import JourneyCard from '../../components/JourneyCard/JourneyCard'

const Journeys = () => {
  const [journeys, setJourneys] = useState([])
  const [searchedJourneys, setSearchedJourneys] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const fetchJourneys = async () => {
      const data = await journeyService.index()
      setJourneys(data)
      setSearchedJourneys(data)
    }
    fetchJourneys()
  }, [])

  const handleChange = ({ target }) => {
    setSearchText(target.value)
    handleSearch(target.value)
  }

  const handleSearch = (str) => {
    setSearchedJourneys([...journeys.filter(journey => journey.name.toLowerCase().includes(str.toLowerCase()))])
  }
  
  return (  
    <main className={styles.container}>
      <div className={styles.search}>
        <i className="fas fa-solid fa-magnifying-glass fa-s"></i>
        <input type="search" value={searchText} onChange={handleChange} placeholder="search journeys" />
      </div>
      {searchedJourneys.map(journey => 
        <JourneyCard key={journey._id} journey={journey}/>  
      )}
    </main>
  )
}

export default Journeys
