import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/journeys`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createReview = async (id, reviewData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteReview = async (journeyId, reviewId) => {
  try {
    const res = await fetch(`${BASE_URL}/${journeyId}/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

const subscribe = async (journeyId) => {
  try {
    const res = await fetch(`${BASE_URL}/${journeyId}/subscribers`, {
      method: 'POST',
      headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
      }
      })
      return res
  } catch (error) {
    console.log(error)
  }
}

const unsubscribe = async (journeyId) => {
  try {
    const res = await fetch(`${BASE_URL}/${journeyId}/subscribers`, {
      method: 'DELETE',
      headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
      }
      })
      return res
  } catch (error) {
    
  }
}


export {
  index,
  show,
  createReview,
  deleteReview,
  subscribe,
  unsubscribe,
}
