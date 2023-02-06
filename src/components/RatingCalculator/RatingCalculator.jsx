import styles from './RatingCalculator.module.css'
import { averageRating } from '../../utilities/averageRating'

const RatingCalculator = ({ journey }) => {
  return (  
    <p><strong>Rating:</strong> {averageRating(journey.reviews)}</p>
  )
}

export default RatingCalculator
