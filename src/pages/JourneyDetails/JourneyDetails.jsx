import styles from './JourneyDetails.module.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import NewReview from '../../components/NewReview/NewReview'
import JourneyReviews from '../../components/JourneyReviews/JourneyReviews'

import * as journeyService from '../../services/journeyService'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const JourneyDetails = ({ user, profile }) => {
  const { id } = useParams()
  const [journey, setJourney] = useState({})
  const [subscriberProfiles, setsubscriberProfiles] = useState({})
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
      setIsSubscribed(true)
    } else {
      await journeyService.unsubscribe(journey._id);
      setIsSubscribed(false)
    }
  }
  //Section for useEffect
  useEffect(() => {
    const fetchJourney = async () => {
      const data = await journeyService.show(id)
      setJourney(data)
    }
    fetchJourney()
  }, [id, isSubscribed])
  
  useEffect(() => {
    setIsSubscribed(
      journey.subscribers && journey.subscribers.some(subscriber => subscriber._id === user.profile)
    )
  }, [journey.subscribers, user.profile])
  
  useEffect(() => {
    const fetchProfiles = async () => {
      if (journey && !reviewsState) {
        const data = await profileService.getAllProfiles()
        const filteredData = data.filter(profile => journey.subscribers.some(sub => sub._id === profile._id))
        setsubscriberProfiles(filteredData)
      } else {
        setsubscriberProfiles([])
      }
    }
    fetchProfiles()
  }, [journey, reviewsState])

  //Loading page when journey is not loaded
  if (!journey) return <Loading />

  return (  
    <main className={styles.container}>
      <div className={styles.journeyCard}>
        <div className={styles.hero}>
          <img src={journey.photo} alt="Journey Cover" />
          <div className={styles.content}>
            <h1>{journey.name}</h1>
            <button onClick={handleSubscribe}>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
          </div>
        </div>
        <p>{journey.description}</p>
      </div>
      <div className={styles.tabs}>
          <button id={reviewsState ? styles.active : styles.inactive} onClick={handleReviewsClick}>Reviews</button>
          <button id={reviewsState ? styles.inactive : styles.active} onClick={handleSubscribersClick}>Subscribers</button>
      </div>
        {reviewsState ?
          journey.reviews && journey.reviews.length > 0 ? (
            <div className={styles.review}>
              <NewReview handleAddReview={handleAddReview} profile={profile} />
              <JourneyReviews journeyId={journey._id} reviews={journey.reviews} user={user} handleDeleteReview={handleDeleteReview} />
            </div>
          ) : (
            <div className={styles.review}>No reviews for this journey yet.</div>
          ) :
          subscriberProfiles && subscriberProfiles.length > 0 ? (
            <div>
              {subscriberProfiles
              .sort((a, b) => b.followers.length - a.followers.length)
              .map(profile => 
                <ProfileCard key={profile._id} profile={profile}/>
              )}
            </div>
          ) : (
            <div>No subscriber for this journey yet...</div>
          )
        }
    </main>
  )
}

export default JourneyDetails
