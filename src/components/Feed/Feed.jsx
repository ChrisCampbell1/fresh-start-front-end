import styles from './Feed.module.css'
import * as postService from '../../services/postService'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/PostCard'
import FeedFilter from '../FeedFilter/FeedFilter'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.index()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (  
    <div className={styles.container}>
      <h1>this is a feed</h1>
      {/* <FeedFilter /> */}
      {posts.map(post =>
        <PostCard key={post._id} post={post} />
      )}
    </div>
  )
}

export default Feed
