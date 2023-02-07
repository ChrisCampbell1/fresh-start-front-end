import styles from './PostCard.module.css'
import Icon from '../Icon/Icon'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import PostStats from '../PostStats/PostStats'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  return (  
  <div className={styles.container}>
    <Link to={`/posts/${post._id}`} state={post}>
      <div className={styles.icon}>
        <h2>{post.title}</h2>
        <Icon category={post.category}/>
      </div>
    </Link>
    <Link to={`/posts/${post._id}`} state={post}>
      <img className={styles.postPhoto} src={post.photo} alt={post.title} />
    </Link>
    <p>{post.content}</p>
    <div className={styles.postStats}>
      <AuthorInfo author={post.author} date={post.createdAt}/>
      <PostStats post={post}/>
    </div>
  </div>
  )
}

export default PostCard
