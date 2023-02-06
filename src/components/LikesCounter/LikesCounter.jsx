import styles from './LikesCounter.module.css'

const LikesCounter = ({ post }) => {
  return (  
    <p><strong>Likes:</strong> {post.likes.length}</p>
  )
}

export default LikesCounter
