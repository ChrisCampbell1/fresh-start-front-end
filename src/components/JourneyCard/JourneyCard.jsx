import styles from './JourneyCard.module.css'
import JourneyStats from '../JourneyStats/JourneyStats'

const JourneyCard = ({ journey }) => {
  return (  
  <div className={styles.container}>
    <h2>{journey.name}</h2>
    <img className={styles.cardPhoto} src="https://picsum.photos/200" alt="journey name" />
    <p>{journey.description}</p>
    <div className={styles.journeyStats}>
      <JourneyStats journey={journey}/>
    </div>
  </div>
  )
}

export default JourneyCard
