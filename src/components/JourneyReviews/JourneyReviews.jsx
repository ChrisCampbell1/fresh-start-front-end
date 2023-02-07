import JourneyReviewCard from "../JourneyReviewCard/JourneyReviewCard"

const JourneyReviews = (props) => {
  console.log(props)
  if (!props.reviews) return <h4>No Reviews</h4>

  return (
    <>
      {props.reviews.map((review) => (
        <JourneyReviewCard
          key={review._id}
          review={review}
          user={props.user}
          handleDeleteReview={props.handleDeleteReview}
        />
      ))}
    </>
  )
}

export default JourneyReviews