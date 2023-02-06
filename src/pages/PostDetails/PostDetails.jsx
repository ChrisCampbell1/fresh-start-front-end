import styles from './PostDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as postService from '../../services/postService'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import PostStats from '../../components/PostStats/PostStats'


const PostDetails = (props) => {
  const { id } = useParams()
  console.log(id)
  const [post, setPost] = useState({})

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
        <Link to={`/posts/${post._id}/edit`}>Edit Post</Link>
      </>
      }
      <p>{post.content}</p>
      <PostStats post={post}/>
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
