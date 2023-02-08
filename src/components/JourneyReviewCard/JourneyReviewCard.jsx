import styles from './JourneyReviewCard.module.css'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import Icon from '../Icon/Icon'

const JourneyReviewCard = ({ review, journeyId, user, handleDeleteReview }) => {
  const formattedDate = new Date(review.createdAt).toLocaleDateString()
  return (  
    <div className={styles.container}>
      <div className={styles.left}>
        <img id={styles.avatar} src={review.author.photo} alt="commenter avatar" />
        {review.author._id === user.profile &&
            <>
							<button id={styles.delete} onClick={()=> handleDeleteReview(journeyId, review._id)}>
                Delete
              </button>
            </>
        }
      </div>
      <div>
        <p>{review.author.name} on {formattedDate}</p>
        <p>{review.content}</p>
        {review.rating === 5 && 
          <p className={styles.rating}>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
          </p>
        }
        {review.rating === 4 && 
          <p className={styles.rating}>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
          </p>
        }
        {review.rating === 3 && 
          <p className={styles.rating}>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
          </p>
        }
        {review.rating === 2 && 
          <p className={styles.rating}>
            <Icon category={"Star"}/>
            <Icon category={"Star"}/>
          </p>
        }
        {review.rating === 1 && 
          <p className={styles.rating}>
            <Icon category={"Star"}/>
          </p>
        }
      </div>
    </div>
  )
}

export default JourneyReviewCard
