import styles from './PostCard.module.css'
import Icon from '../Icon/Icon';

const PostCard = () => {
  let category = "meal"
  return (  
  <div className={styles.container}>
    <h2>Post Title</h2>
    <Icon category={category}/>
    <img src="https://picsum.photos/200" alt="post photo" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et, tempore, doloremque minima maxime nobis reiciendis assumenda suscipit voluptatum ducimus praesentium molestias! Iusto voluptate aspernatur, dolore ratione hic ea provident!</p>
  </div>
  )
}

export default PostCard;
