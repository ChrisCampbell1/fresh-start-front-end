import styles from './PostStats.module.css'
import LikesCounter from '../LikesCounter/LikesCounter'
import CommentsCounter from '../CommentsCounter/CommentsCounter'

const PostStats = ({ post, handleLike, liked }) => {
  return (  
    <div className={styles.container}>
      <LikesCounter post={post} handleLike={handleLike} liked={liked} />
      <CommentsCounter post={post}/>
    </div>
  )
}

export default PostStats
