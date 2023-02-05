import styles from './JourneyStats.module.css'
import SubscriberCounter from '../SubscriberCounter/SubscriberCounter'
import RatingCalculator from '../RatingCalculator/RatingCalculator'

const JourneyStats = () => {
  return (  
    <div className={styles.container}>
      <SubscriberCounter />
      <RatingCalculator />
    </div>
  )
}

export default JourneyStats
