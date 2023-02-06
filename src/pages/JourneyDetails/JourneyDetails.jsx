import styles from './JourneyDetails.module.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
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

  if (!journey) return <Loading />
  
  return (  
    <main className={styles.container}>
        <>
          <h1>{journey.name}</h1>
          <div>
            <img src= {journey.photo} alt="Journey Cover" />
          </div>
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
    </main>
  )
}

export default JourneyDetails
