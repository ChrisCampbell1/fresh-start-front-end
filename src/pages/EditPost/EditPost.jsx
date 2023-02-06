import styles from './EditPost.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import * as postService  from '../../services/postService'

const EditPost = (props) => {
  const navigate = useNavigate()
  
  const location = useLocation()
  const { post } = location.state
  const [form, setForm] = useState(post)
  const [photoData, setPhotoData] = useState({})
  const [journeys, setJourneys] = useState([])

  useEffect(() => {
    const fetchJourneys = async () => {
      const profile = await profileService.getProfile(props.user.profile)
      setJourneys(profile.journeys)
    }
    fetchJourneys()
    console.log(journeys)
  }, [])

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({photo: evt.target.files[0]})
  }

  const handleSumbit = () => {
    postService.update(form, post._id)
    navigate(`/posts/${post._id}`)
  }

  return (  
    <main className={styles.container}>
      <h1>Edit Post</h1>
      <form autoComplete='off' onSubmit={handleSumbit}>
        <label htmlFor='title-input'>Title</label>
        <input
          required
          type='text'
          name='title'
          id='title-input'
          value={form.title}
          placeholder='title'
          onChange={handleChange}
        />
        <label htmlFor='category-input'>Category</label>
        <select
          required
          type='select'
          name='category'
          id='cateogry-input'
          value={form.category}
          onChange={handleChange}
        >
          <option value='Food'>Food</option>
          <option value='Fitness'>Fitness</option>
          <option value='BlogEntry'>Blog Entry</option>
        </select>
        <label htmlFor='journey-input'>Journey</label>
        <select
          type='select'
          name='journey'
          id='journey-input'
          value={form.journey}
          onChange={handleChange}
        >
          <option value="">Select Journey</option>
          {journeys.map(journey => 
            <option key={journey._id} value={journey._id}>{journey.name}</option>  
          )}
        </select>
        <label htmlFor='content-input'>Post</label>
        <input
          required
          type='textarea'
          name='content'
          id='content-input'
          value={form.content}
          placeholder='Enter your post here'
          onChange={handleChange}
        />
        <label htmlFor="photo-input">Add a Photo</label>
        <input
          type='file'
          name='photo'
          id='photo-input'
          onChange={handleChangePhoto}
        />
        <button>Submit Post</button>
      </form>
    </main>
  )
}

export default EditPost
