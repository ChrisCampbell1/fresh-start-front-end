import styles from './JourneyStats.module.css'
import SubscriberCounter from '../SubscriberCounter/SubscriberCounter'
import RatingCalculator from '../RatingCalculator/RatingCalculator'

const JourneyStats = ({ journey }) => {
  return (  
    <div className={styles.container}>
        <SubscriberCounter journey={journey}/>
        <RatingCalculator journey={journey}/>
    </div>
  )
}

export default JourneyStats
