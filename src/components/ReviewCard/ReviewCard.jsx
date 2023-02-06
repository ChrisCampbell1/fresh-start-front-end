import styles from './ReviewCard.module.css'
import AuthorInfo from '../AuthorInfo/AuthorInfo'

const ReviewCard = ({ review }) => {
  console.log(review, "review")
  return (  
    <div className={styles.container}>
      <AuthorInfo author={review.author} date={review.createdAt}/>
    </div>
  )
}

export default ReviewCard
