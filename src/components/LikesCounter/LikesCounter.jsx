import styles from './LikesCounter.module.css'
import Icon from '../Icon/Icon'

const LikesCounter = ({ post }) => {
  return (  
    <div className={styles.container}>
      <p><Icon category={'Like'}/>{post.likes.length}</p>
    </div>
  )
}

export default LikesCounter
