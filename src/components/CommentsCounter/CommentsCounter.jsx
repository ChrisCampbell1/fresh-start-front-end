import styles from './CommentsCounter.module.css'

const CommentsCounter = ({ post }) => {
  return (  
    <p><strong>Comments:</strong> {post.comments.length}</p>
  )
}

export default CommentsCounter
