import styles from './PostDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as postService from '../../services/postService'
import * as profileService from '../../services/profileService'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import PostStats from '../../components/PostStats/PostStats'
import CommentsList from '../../components/CommentsList/CommentsList'
import AddComment from '../../components/AddComment/AddComment'


const PostDetails = ({ user, profile }) => {
  const [post, setPost] = useState({})
  const [liked, setLiked] = useState(null)
  const [content, setContent] = useState('')

  
  const { id } = useParams()
  
    useEffect(() => {
      const fetchPost = async () => {
        let data = await postService.show(id)
        setPost(data)
      }
      fetchPost()
    }, [id])

  const handleLike = async () => {
    if (post.likes.includes(user.profile)) {
      const result = await postService.unlike(post._id)
      setPost(result)
      setLiked(false)
    } else {
      const result = await postService.like(post._id)
      setPost(result)
      setLiked(true)
    }
  }

  const handleCommentContentChange = ({ target }) => {
    setContent(target.value)
  }

  const handleSubmit = async (form, evt) => {
    evt.preventDefault()
    try {
      const data = await postService.addComment({content: form}, post._id)
      setPost({...post, comments: [...post.comments, data]})
      setContent('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteComment = async ({ target }) => {
    await postService.deleteComment(post._id, target.id)
    setPost({...post, comments: post.comments.filter(comment => comment._id !== target.id)})
  }

  return (  
    <main className={styles.container}>
      {post._id ?
      <>
        <h1>{post.title}</h1>
        <img className={styles.hero} src={post.photo} alt={post.title} />
        <AuthorInfo author={post.author} date={post.createdAt}/>
        {post.author._id === user.profile &&
        <>
          <Link to={`/posts/${post._id}/edit`} state={{post}}>Edit Post</Link>
        </>
        }
        <p>{post.content}</p>
        <PostStats post={post} handleLike={handleLike} liked={liked} />
        <AddComment profile={profile} handleSubmit={handleSubmit} content={content} handleCommentContentChange={handleCommentContentChange} />
        <CommentsList comments={post.comments} user={user} handleDeleteComment={handleDeleteComment} />
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
