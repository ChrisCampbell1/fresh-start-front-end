import styles from './CommentCard.module.css'

const CommentCard = ({ comment, user, handleDeleteComment }) => {
  return (  
    <div className={styles.container}>
      <img className={styles.profilePhoto} src={comment.author.photo} alt={comment.author.name} />
      <div className={styles.content}>
        <p>{comment.author.name}</p>
        <p>{comment.content}</p>
      </div>
      {comment.author._id === user.profile && <i className="fas fa-solid fa-x" id={comment._id} onClick={handleDeleteComment}></i>}

    </div>
  )
}

export default CommentCard
