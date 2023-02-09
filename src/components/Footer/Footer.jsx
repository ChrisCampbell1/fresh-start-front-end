import styles from './Footer.module.css'
import Icon from "../Icon/Icon"
const Footer = () => {
  return (
  <div className={styles.container}>
    <footer>
      
      <div className={styles.authors}>
        <div className={styles.author}>
          <p className={styles.authorName}>Robert Fridlender</p>
          <a href="https://github.com/robfrid06" className={styles.authorLink}>GitHub</a>
        </div>
        <div className={styles.author}>
          <p className={styles.authorName}>Chris Campbell</p>
          <a href="https://github.com/ChrisCampbell1" className={styles.authorLink}>GitHub</a>
        </div>
        <div className={styles.author}>
          <p className={styles.authorName}>Yan Shi</p>
          <a href="https://github.com/leonshiyan" className={styles.authorLink}>GitHub</a>
        </div>
        <p><Icon category={'GitLogo'}/>© 2023 FreshStart All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default Footer