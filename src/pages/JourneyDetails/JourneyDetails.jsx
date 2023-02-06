import styles from './JourneyDetails.module.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ReviewCard from '../../components/ReviewCard/ReviewCard'

import * as journeyService from '../../services/journeyService'

const JourneyDetails = () => {
  const { id } = useParams()
  const [journey, setJourney] = useState({})
  const [reviewsState, setReviewsState] = useState(true)

  const handleReviewsClick = () => {
    setReviewsState(true)
  }
  const handleSubscribersClick = () => {
    setReviewsState(false)
  }

  useEffect(() => {
    const fetchJourney = async () => {
      const data = await journeyService.show(id)
      setJourney(data)
    }
    fetchJourney()
  }, [id])
  
  return (  
    <main className={styles.container}>
      {journey && (
        <>
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
            journey.reviews && (
              <div>
                {journey.reviews.map(review => 
                  <ReviewCard key={review._id} review={review}/>
                )}
              </div>
            )
          :
            journey.subscribers && (
              <div>
                {journey.subscribers.map(review => 
                  <p>this is a subscriber</p>  
                )}
              </div>
            )
          }
        </>
      )}
    </main>
  )
}

export default JourneyDetails
