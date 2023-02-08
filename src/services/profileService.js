import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getProfile(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return res.json()
}

async function addPhoto(photoData, profileId) {
  console.log(photoData);
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}
const follow = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
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
const unfollow = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      method: 'DELETE',
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

export { 
  getAllProfiles, 
  getProfile, 
  addPhoto,
  follow,
  unfollow
}
