import styles from './Feed.module.css'
import PostCard from '../PostCard/PostCard';

const Feed = () => {
  return (  
    <div className={styles.container}>
      <h1>this is a feed</h1>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default Feed;
