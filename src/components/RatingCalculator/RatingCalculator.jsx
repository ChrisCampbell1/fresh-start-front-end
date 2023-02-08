import styles from './RatingCalculator.module.css'
import { averageRating } from '../../utilities/averageRating'

const RatingCalculator = ({ journey }) => {
  return (  
    <div className={styles.container}>
      <i className="fas fa-solid fa-star"></i>
      <p>{averageRating(journey.reviews)}</p>
    </div>
  )
}

export default RatingCalculator
