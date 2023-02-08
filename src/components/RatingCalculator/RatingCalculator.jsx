import styles from './RatingCalculator.module.css'
import { averageRating } from '../../utilities/averageRating'
import Icon from '../Icon/Icon'

const RatingCalculator = ({ journey }) => {
  return (  
    <p><Icon category={"Star"}/> {averageRating(journey.reviews)}</p>
  )
}

export default RatingCalculator
