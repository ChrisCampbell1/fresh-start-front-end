import styles from './JourneyCard.module.css'
import JourneyStats from '../JourneyStats/JourneyStats'
import { Link } from 'react-router-dom'

const JourneyCard = ({ journey }) => {
  return (  
  <div className={styles.container}>
    <div className={styles.hero}>
      <Link to={`/journeys/${journey._id}`} state={journey}>
        <div className={styles.title}>
          <h1>{journey.name}</h1>
        </div>
        <img className={styles.cardPhoto} src={journey.photo} alt={journey.name} />
      </Link>
    </div>
    <div className={styles.journeyInfo}>
      <p>{journey.description}</p>
      <JourneyStats journey={journey}/>
    </div>
  </div>
  )
}

export default JourneyCard
