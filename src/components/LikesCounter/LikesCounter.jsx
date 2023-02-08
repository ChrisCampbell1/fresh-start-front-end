import styles from './LikesCounter.module.css'
import Icon from '../Icon/Icon'

const LikesCounter = ({ post, handleLike, liked }) => {
  return (  
    <div className={styles.container}>
      <p onClick={handleLike}><Icon category={'Like'}/>{post.likes?.length}</p>
    </div>
  )
}

export default LikesCounter
