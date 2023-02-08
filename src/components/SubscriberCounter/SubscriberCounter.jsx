import styles from './SubscriberCounter.module.css'
import Icon from '../Icon/Icon'

const SubscriberCounter = ({ journey }) => {
  return (  
    <p><Icon category={"Follower"}/> {journey.subscribers.length}</p>
  )
}

export default SubscriberCounter
