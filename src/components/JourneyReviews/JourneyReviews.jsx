import JourneyReviewCard from "../JourneyReviewCard/JourneyReviewCard"

const JourneyReviews = (props) => {
  if (!props.reviews) return <h4>No Reviews</h4>
  return (
    <>
      {props.reviews.map((review) => (
        <JourneyReviewCard
          key={review._id}
          review={review}
          user={props.user}
          journeyId={props.journeyId}
          handleDeleteReview={props.handleDeleteReview}
        />
      ))}
    </>
  )
}

export default JourneyReviews