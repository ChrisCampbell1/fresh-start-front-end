import styles from './AuthorInfo.module.css'
import DateCard from '../DateCard/DateCard'

const AuthorInfo = ({ author, date }) => {
  return (  
    <div>
      <p><strong>Author:</strong> {author.name}</p>
      <DateCard date={date}/>
    </div>
  )
}

export default AuthorInfo
