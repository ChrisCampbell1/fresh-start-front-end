import styles from './Journeys.module.css'
import JourneyCard from '../../components/JourneyCard/JourneyCard'

const Journeys = () => {
  return (  
    <main className={styles.container}>
      <h1>This is the Journeys page</h1>
      <JourneyCard />
      <JourneyCard />
      <JourneyCard />
    </main>
  )
}

export default Journeys
