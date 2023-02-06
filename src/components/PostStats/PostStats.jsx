import styles from './PostStats.module.css'
import LikesCounter from '../LikesCounter/LikesCounter'
import CommentsCounter from '../CommentsCounter/CommentsCounter'

const PostStats = ({ post }) => {
  return (  
    <div>
      <LikesCounter post={post}/>
      <CommentsCounter post={post}/>
    </div>
  )
}

export default PostStats
