import styles from './JourneyDetails.module.css'
import * as journeyService from '../../services/journeyService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const JourneyDetails = () => {
  const {id} = useParams()
  
  const [journey, setJourney] = useState({})
  const [reviewsState, setReviewsState] = useState(true)

  const handleReviewsClick = () => {
    setReviewsState(true)
  }
  const handleSubscribersClick = () => {
    setReviewsState(false)
  }

  useEffect(() => {
    console.log("use effect fired")
    const fetchJourney = async () => {
      const data = await journeyService.show(id)
      setJourney(data)
    }
    fetchJourney()
  }, [id])
  
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
        {/* {journey.reviews.map(review => 
          <p>this is a review</p>
        )} */}
      </div>
      :
      <div>
        {/* {journey.subscribers.map(review => 
          <p>this is a subscriber</p>  
        )} */}
      </div>
      }
    </main>
  )
}

export default JourneyDetails
