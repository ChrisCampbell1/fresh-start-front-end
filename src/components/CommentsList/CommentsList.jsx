import CommentCard from '../CommentCard/CommentCard'
import styles from './CommentsList.module.css'

const CommentsList = ({ comments }) => {
  return (  
    <div className={styles.container}>
      {comments.map(comment => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentsList
