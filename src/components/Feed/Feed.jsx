import styles from './Feed.module.css'
import PostCard from '../PostCard/PostCard'
import FeedFilter from '../FeedFilter/FeedFilter'

const Feed = () => {
  return (  
    <div className={styles.container}>
      <h1>this is a feed</h1>
      <FeedFilter />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default Feed;
