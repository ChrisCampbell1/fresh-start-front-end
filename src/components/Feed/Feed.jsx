import styles from './Feed.module.css'
import * as postService from '../../services/postService'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/PostCard'
import FeedFilter from '../FeedFilter/FeedFilter'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [searchedPosts, setSearchedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.index()
      setPosts(data)
      setSearchedPosts(data)
    }
    fetchPosts()
  }, [])

  const handleSort = ({ target }) => {
    setSearchedPosts(target.innerHTML === 'ASC' ? [...searchedPosts.sort((a, b) => a.likes.length - b.likes.length)] : [...searchedPosts.sort((a, b) => b.likes.length - a.likes.length)])
  }

  const handleSearch = (str) => {
    setSearchedPosts([...posts.filter(post => post.author.name.toLowerCase().includes(str))])
  }

  return (  
    <div className={styles.container}>
      <FeedFilter handleSort={handleSort} handleSearch={handleSearch} />
      {searchedPosts.map(post =>
        <PostCard key={post._id} post={post} />
      )}
    </div>
  )
}

export default Feed
