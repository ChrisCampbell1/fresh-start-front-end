import styles from './FeedFilter.module.css'
import { useState } from 'react'

const FeedFilter = ({ handleSort, handleSearch, sortStatus }) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = ({ target }) => {
    setSearchText(target.value)
    handleSearch(target.value)
  }

  return (  
    <div className={styles.container}>
        <div className={styles.sort} onClick={handleSort}>
          <div>likes</div>
          {!sortStatus ?
            <i className="fas fa-regular fa-sort"></i>
            :
            sortStatus === 1 ?
              <i className="fas fa-solid fa-sort-down"></i>
              :
              <i className="fas fa-solid fa-sort-up"></i>       
          }
      </div>
      <div className={styles.search}>
      <i className="fas fa-solid fa-magnifying-glass fa-s"></i>
          <input type="search" value={searchText} onChange={handleChange} placeholder="search by author..." />
      </div>
    </div>
  )
}

export default FeedFilter
