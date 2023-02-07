import styles from './JourneyDetails.module.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import NewReview from '../../components/NewReview/NewReivew'
import JourneyReviews from '../../components/JourneyReviews/JourneyReviews'

import * as journeyService from '../../services/journeyService'

const JourneyDetails = (props) => {
  const { id } = useParams()
  const [journey, setJourney] = useState({})
  const [reviewsState, setReviewsState] = useState(true)
  const [isSubscribed, setIsSubscribed] = useState(false)
  //Section for handlers
  const handleReviewsClick = () => {
    setReviewsState(true)
  }
  const handleSubscribersClick = () => {
    setReviewsState(false)
  }

  const handleAddReview = async (reviewData) => {
    const newReview = await journeyService.createReview(id, reviewData)
    setJourney({ ...journey, reviews: [...journey.reviews, newReview] })
  }

  const handleDeleteReview = async (id,reviewId) => {
    await journeyService.deleteReview(id, reviewId)
    setJourney({ ...journey, reviews: journey.reviews.filter((c) => c._id !== reviewId) })
  }

  const handleSubscribe = async () => {
    if (!isSubscribed) {
      await journeyService.subscribe(journey._id);
      setIsSubscribed(true);
    } else {
      await journeyService.unsubscribe(journey._id);
      setIsSubscribed(false);
    }
  }
  //Section for useEffect
  useEffect(() => {
    const fetchJourney = async () => {
      const data = await journeyService.show(id)
      setJourney(data)
    }
    fetchJourney()
  }, [id])
  
  useEffect(() => {
    setIsSubscribed(
      journey.subscribers && journey.subscribers.some(subscriber => subscriber._id === props.user.profile)
    );
  }, [journey.subscribers, props.user.profile]);
  

  //Loading page when journey is not loaded
  if (!journey) return <Loading />

  return (  
    <main className={styles.container}>
        <>
        <div>
        <button onClick={handleSubscribe}>
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        </div>
          <h1>{journey.name}</h1>
          <div>
            <img src= {journey.photo} alt="Journey Cover" />
          </div>
          <div>
            <p>{journey.description}</p>
          </div>
          <div>
            <button onClick={handleReviewsClick}>
              Reviews
            </button>
            <button onClick={handleSubscribersClick}>
              Subscribers
            </button>
          </div>
          <div>
            <h1>Add review</h1>
            < NewReview handleAddReview={handleAddReview}/>
          </div>
          {reviewsState ?
            journey.reviews && (

              <div>
                  <JourneyReviews journeyId={journey._id}reviews={journey.reviews} user={props.user} handleDeleteReview={handleDeleteReview} />
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
