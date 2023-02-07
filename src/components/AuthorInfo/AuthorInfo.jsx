import styles from './AuthorInfo.module.css'
import { Link } from 'react-router-dom'

const AuthorInfo = ({ author, date }) => {
  const formattedDate = new Date(date).toLocaleDateString()
  return (  
    <Link className={styles.link} to={`/profiles/${author._id}`}>
      <div className={styles.container}>
          <img src={author?.photo} alt="author avatar" />
          <div className={styles.nameDate}>
            <p>{author.name}</p>
            <p>{formattedDate}</p>
          </div>
      </div>
    </Link>
  )
}

export default AuthorInfo
