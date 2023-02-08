import styles from './PostDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as postService from '../../services/postService'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import PostStats from '../../components/PostStats/PostStats'


const PostDetails = (props) => {
  const [post, setPost] = useState({})
  const [liked, setLiked] = useState(null)
  
  const { id } = useParams()

  const handleLike = async () => {
    console.log(`POST LIKES`, post.likes)
    console.log(`PROFILE`, props.user.profile)
    console.log(post.likes.includes(props.user.profile))
    if (post.likes.includes(props.user.profile)) {
      console.log(`ran dislike`)
      const result = await postService.unlike(post._id)
      setPost(result)
      setLiked(false)
    } else {
      console.log(`ran like`)
      const result = await postService.like(post._id)
      setPost(result)
      setLiked(true)
    }
    console.log(`POST AFTER`, post)
  }

  useEffect(() => {
    const fetchPost = async () => {
      let data = await postService.show(id)
      setPost(data)
    }
    fetchPost()
  }, [id])

  return (  
    <main className={styles.container}>
      {post._id ?
      <>
      <h1>{post.title}</h1>
      <img className={styles.hero} src={post.photo} alt={post.title} />
      <AuthorInfo author={post.author} date={post.createdAt}/>
      {post.author._id === props.user.profile &&
      <>
        <Link to={`/posts/${post._id}/edit`} state={{post}}>Edit Post</Link>
      </>
      }
      <p>{post.content}</p>
      <PostStats post={post} handleLike={handleLike} liked={liked} />
      <form>
        
      </form>
      </>
      :
      <>
      <h1>Loading Post...</h1>
      </>
      }
    </main>
  )
}

export default PostDetails
