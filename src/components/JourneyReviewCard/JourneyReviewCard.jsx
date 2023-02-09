import styles from './JourneyReviewCard.module.css'

const JourneyReviewCard = ({ review, journeyId, user, handleDeleteReview }) => {
  const formattedDate = new Date(review.createdAt).toLocaleDateString()
  return (  
    <div className={styles.container}>
      <img id={styles.avatar} src={review.author.photo} alt={review.author.name} />
      <div className={styles.content}>
        <p>{review.author.name} on {formattedDate}</p>
        <p>{review.content}</p>
        {review.rating === 5 && 
          <p className={styles.rating}>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
          </p>
        }
        {review.rating === 4 && 
          <p className={styles.rating}>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
          </p>
        }
        {review.rating === 3 && 
          <p className={styles.rating}>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
          </p>
        }
        {review.rating === 2 && 
          <p className={styles.rating}>
            <i className="fas fa-solid fa-star"></i>
            <i className="fas fa-solid fa-star"></i>
          </p>
        }
        {review.rating === 1 && 
          <p className={styles.rating}>
            <i className="fas fa-solid fa-star"></i>
          </p>
        }
      </div>
      {review.author._id === user.profile && <button id={styles.delete} onClick={()=> handleDeleteReview(journeyId, review._id)}><i className="fas fa-solid fa-x" ></i></button>}
    </div>
  )
}

export default JourneyReviewCard
