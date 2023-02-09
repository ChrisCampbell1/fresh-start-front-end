import styles from './PostCard.module.css'
import Icon from '../Icon/Icon'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import PostStats from '../PostStats/PostStats'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as postService from '../../services/postService'

const PostCard = (props) => {
  const [post, setPost] = useState(props.post)
  const [liked, setLiked] = useState(null)

  const handleLike = async () => {
    if (post.likes.includes(props.user.profile)) {
      const result = await postService.unlike(post._id)
      setPost(result)
      setLiked(false)
    } else {
      const result = await postService.like(post._id)
      setPost(result)
      setLiked(true)
    }
  }

  return (  
  <div className={styles.container}>
    <Link to={`/posts/${post._id}`} state={post}>
        <h2>{post.title}</h2>
    </Link>
    <Link to={`/posts/${post._id}`} state={post}>
      <img className={styles.postPhoto} src={post.photo} alt={post.title} />
    </Link>
    <p className={styles.content}>{post.content}</p>
    <div className={styles.postStats}>
      <AuthorInfo author={post.author} date={post.createdAt}/>
      <div className={styles.postType}>
        <Icon category={post.category}/>
        <p>{post.journey?.name}</p>
      </div>
      <PostStats post={post} handleLike={handleLike} liked={liked} />
    </div>
  </div>
  )
}

export default PostCard
