import styles from './JourneyDetails.module.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import NewReview from '../../components/NewReview/NewReview'
import JourneyReviews from '../../components/JourneyReviews/JourneyReviews'

import * as journeyService from '../../services/journeyService'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const JourneyDetails = (props) => {
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
      journey.subscribers && journey.subscribers.some(subscriber => subscriber._id === props.user.profile)
    )
  }, [journey.subscribers, props.user.profile])
  
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
            
          </div>
          {reviewsState ?
            journey.reviews && journey.reviews.length > 0 ? (
              <div>
                <h1>Add review</h1>
                <NewReview handleAddReview={handleAddReview}/>
                <JourneyReviews journeyId={journey._id} reviews={journey.reviews} user={props.user} handleDeleteReview={handleDeleteReview} />
              </div>
            ) : (
              <div>No reviews for this journey yet.</div>
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
              <div>No subscriber for this journey yet.</div>
            )
          }
      </>
    </main>
  )
}

export default JourneyDetails
