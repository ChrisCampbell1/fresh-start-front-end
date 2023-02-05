import styles from './SubscriberCounter.module.css'

const SubscriberCounter = ({ journey }) => {
  return (  
    <p><strong>Subscribers:</strong> {journey.subscribers.length}</p>
  )
}

export default SubscriberCounter
