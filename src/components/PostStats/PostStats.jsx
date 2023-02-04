import styles from './PostStats.module.css'
import LikesCounter from '../LikesCounter/LikesCounter'
import CommentsCounter from '../CommentsCounter/CommentsCounter'

const PostStats = () => {
  return (  
    <div>
      <LikesCounter />
      <CommentsCounter />
    </div>
  )
}

export default PostStats
