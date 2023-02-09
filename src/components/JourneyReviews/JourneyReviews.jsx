import JourneyReviewCard from "../JourneyReviewCard/JourneyReviewCard"
import styles from "./JourneyReviews.module.css"

const JourneyReviews = (props) => {
  if (!props.reviews) return <h4>No Reviews</h4>
  return (
    <div className={styles.container}>
      {props.reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((review) => (
      <JourneyReviewCard
        key={review._id}
        review={review}
        user={props.user}
        journeyId={props.journeyId}
        handleDeleteReview={props.handleDeleteReview}
      />
      ))}
    </div>
  )
}

export default JourneyReviews