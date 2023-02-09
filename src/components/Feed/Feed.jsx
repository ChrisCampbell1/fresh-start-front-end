import styles from './Feed.module.css'
import * as postService from '../../services/postService'
import { useState, useEffect } from 'react'
import PostCard from '../PostCard/PostCard'
import FeedFilter from '../FeedFilter/FeedFilter'
import { Link } from 'react-router-dom'

const Feed = ({user}) => {
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
      {searchedPosts.length ? 
        searchedPosts.map(post =>
          <PostCard key={post._id} post={post} user={user}/>
        )
        :
        <div className={styles.blankFeed}>
          <h1>Welcome to FreshStart</h1>
          <p>This is your feed.</p>
          <p>Once you start following some creators or make some pots you'll start to see posts here.</p>
          <p>{user.profile.following}</p>
          <Link to={'/journeys'}>Find Your Wellness Journey</Link>
          <Link to={'/discover'}>Follow Creators</Link>
          <Link to={'/posts/new'}>Create Your First Post</Link>
        </div>
      }
    </div>
  )
}

export default Feed
