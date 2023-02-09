import styles from './CommentsCounter.module.css'
import Icon from '../Icon/Icon'

const CommentsCounter = ({ post }) => {
  return (  
    <div className={styles.container}>
      <Icon category={'Comment'}/>
      <p>{post.comments.length}</p>
    </div>
  )
}

export default CommentsCounter
