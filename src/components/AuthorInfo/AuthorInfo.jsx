import styles from './AuthorInfo.module.css'
import { Link } from 'react-router-dom'
import DateCard from '../DateCard/DateCard'

const AuthorInfo = ({ author, date }) => {
  return (  
    <div className={styles.container}>
      <p><Link className={styles.link} to={`/profiles/${author._id}`}><img src={author?.photo} alt="author avatar" />{author.name}</Link></p>
      <DateCard date={date}/>
    </div>
  )
}

export default AuthorInfo
