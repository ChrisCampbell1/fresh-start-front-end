import styles from './DateCard.module.css'
import Icon from "../Icon/Icon"

const DateCard = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString()
  return (  
    <div className={styles.container}>
      <p><Icon category={'Date'}/>{formattedDate}</p>
    </div>
  )
}

export default DateCard
