import styles from './FeedFilter.module.css'
import { useState } from 'react'

const FeedFilter = ({ handleSort, handleSearch }) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = ({ target }) => {
    setSearchText(target.value)
    handleSearch(target.value)
  }

  return (  
    <div className={styles.container}>
        <div className={styles.sort}>
          <div onClick={handleSort}>ASC</div>
          <div>Likes</div>
          <div onClick={handleSort}>DESC</div>
      </div>
      <div className={styles.search}>
          <input type="search" value={searchText} onChange={handleChange} />
      </div>
    </div>
  )
}

export default FeedFilter
