import styles from './FeedFilter.module.css'

// datae created
// journeys
// 

const FeedFilter = (props) => {
  
  return (  
    <div className={styles.container}>
      <span onClick={(evt) => props.handleClickFilter(evt)}>ASC</span>
      <span>Member Since</span>
      <span onClick={(evt) => props.handleClickFilter(evt)}>DESC</span>
    </div>
  )
}

export default FeedFilter
