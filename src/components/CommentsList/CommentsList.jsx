import CommentCard from '../CommentCard/CommentCard'
import styles from './CommentsList.module.css'

const CommentsList = ({ comments, user, handleDeleteComment }) => {
  return (  
    <div className={styles.container}>
      {comments.map(comment => (
        <CommentCard key={comment._id} comment={comment} user={user} handleDeleteComment={handleDeleteComment} />
      ))}
    </div>
  )
}

export default CommentsList
