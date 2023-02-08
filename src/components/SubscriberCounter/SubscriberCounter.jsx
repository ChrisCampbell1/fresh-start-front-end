import styles from './SubscriberCounter.module.css'

const SubscriberCounter = ({ journey }) => {
  return (
    <div  className={styles.container}>
      <i className="fas fa-solid fa-users"></i>
      <p>{journey.subscribers.length}</p>
    </div>
  )
}

export default SubscriberCounter
