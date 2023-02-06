import styles from './JourneyCard.module.css'
import JourneyStats from '../JourneyStats/JourneyStats'
import { Link } from 'react-router-dom'

const JourneyCard = ({ journey }) => {
  return (  
  <div className={styles.container}>
    <Link to={`/journeys/${journey._id}`} state={journey}>
      <h2>{journey.name}</h2>
    </Link>
    <Link to={`/journeys/${journey._id}`} state={journey}>
      <img className={styles.cardPhoto} src={journey.photo} alt="journey name" />
    </Link>
    <p>{journey.description}</p>
    <div className={styles.journeyStats}>
      <JourneyStats journey={journey}/>
    </div>
  </div>
  )
}

export default JourneyCard
