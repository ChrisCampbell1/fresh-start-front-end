import styles from './JourneyDetails.module.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import ReviewCard from '../../components/ReviewCard/ReviewCard'


const JourneyDetails = () => {
  const { state } = useLocation()
  
  const [journey, setJourney] = useState(state)
  const [reviewsState, setReviewsState] = useState(true)

  const handleReviewsClick = () => {
    setReviewsState(true)
  }
  const handleSubscribersClick = () => {
    setReviewsState(false)
  }
  
  return (  
    <main className={styles.container}>
      <h1>{journey.name}</h1>
      <img src="https://picsum.photos/600/300" alt="" />
      <p>{journey.description}</p>
      <div>
        <button onClick={() => handleReviewsClick()}>
          Reviews
        </button>
        <button onClick={() => handleSubscribersClick()}>
          Subscribers
        </button>
      </div>
      {reviewsState ?
      <div>
        {journey.reviews.map(review => 
          <ReviewCard key={review._id} review={review}/>
        )}
      </div>
      :
      <div>
        {journey.subscribers.map(review => 
          <p>this is a subscriber</p>  
        )}
      </div>
      }
    </main>
  )
}

export default JourneyDetails
