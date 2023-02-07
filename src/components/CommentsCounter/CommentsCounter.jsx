import styles from './CommentsCounter.module.css'
import Icon from '../Icon/Icon'

const CommentsCounter = ({ post }) => {
  return (  
    <div className={styles.container}>
      <p><Icon category={'Comment'}/>{post.comments.length}</p>
    </div>
  )
}

export default CommentsCounter
