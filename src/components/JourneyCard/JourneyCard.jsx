import styles from './JourneyCard.module.css'
import PostStats from '../PostStats/PostStats'

const JourneyCard = () => {
  return (  
  <div className={styles.container}>
    <h2>Journey Name</h2>
    <img className={styles.cardPhoto} src="https://picsum.photos/200" alt="journey name" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et, tempore, doloremque minima maxime nobis reiciendis assumenda suscipit voluptatum ducimus praesentium molestias! Iusto voluptate aspernatur, dolore ratione hic ea provident!</p>
    <div className={styles.journeyStats}>
      <PostStats />
    </div>
  </div>
  )
}

export default JourneyCard
