import styles from './JourneyReviewCard.module.css'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import { Link } from "react-router-dom"

const JourneyReviewCard = ({ review, journeyId, user, handleDeleteReview }) => {
  return (  
    <div className={styles.container}>
      <AuthorInfo author={review.author} date={review.createdAt}/>
      <div>
        {review.author._id === user.profile &&
            <>
							<button onClick={()=> handleDeleteReview(journeyId, review._id)}>
                DELETE
              </button>
            </>
        }
        <p>{review.content}</p>
      </div>
    </div>
  )
}

export default JourneyReviewCard
