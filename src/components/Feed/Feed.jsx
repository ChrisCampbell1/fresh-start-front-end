import styles from './Feed.module.css'
import * as postService from '../../services/postService'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/PostCard'
import FeedFilter from '../FeedFilter/FeedFilter'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [searchedPosts, setSearchedPosts] = useState([])
  const [sortStatus, setSortStatus] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.index()
      setPosts(data)
      setSearchedPosts(data)
    }
    fetchPosts()
  }, [])

  const handleSort = () => {
    setSortStatus(sortStatus ? sortStatus * -1 : 1)
    setSearchedPosts(sortStatus === 1 ? [...searchedPosts.sort((a, b) => a.likes.length - b.likes.length)] : [...searchedPosts.sort((a, b) => b.likes.length - a.likes.length)])
  }
  
  const handleSearch = (str) => {
    setSearchedPosts([...posts.filter(post => post.author.name.toLowerCase().includes(str))])
  }

  return (  
    <div className={styles.container}>
      <FeedFilter handleSort={handleSort} handleSearch={handleSearch} sortStatus={sortStatus} />
      {searchedPosts.map(post =>
        <PostCard key={post._id} post={post} />
      )}
    </div>
  )
}

export default Feed
