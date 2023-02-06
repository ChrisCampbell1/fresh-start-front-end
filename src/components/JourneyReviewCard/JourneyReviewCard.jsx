import styles from './JourneyReviewCard.module.css'
import AuthorInfo from '../AuthorInfo/AuthorInfo'

const JourneyReviewCard = ({ review }) => {
  return (  
    <div className={styles.container}>
      <AuthorInfo author={review.author} date={review.createdAt}/>
      <div>
        <p>{review.content}</p>
      </div>
    </div>
  )
}

export default JourneyReviewCard
