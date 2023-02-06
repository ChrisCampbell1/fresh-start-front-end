import styles from './NewPost.module.css'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'


const NewPost = (props) => {
  const [form, setForm] = useState({
    title: '',
    category: 'Food',
    journey: '',
    content: '',
    photo: ''
  })

  const [journeys, setJourneys] = useState([])

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  useEffect(() => {
    const fetchJourneys = async () => {
      const profile = await profileService.getProfile(props.user.profile)
      setJourneys(profile.journeys)
    }
    fetchJourneys()
    console.log(journeys)
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    
  }

  return (  
    <main className={styles.container}>
      <h1>This is the New Post Page</h1>
      <form>
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
          required
          type='file'
          name='photo'
          id='photo-input'
          onChange={handleChange}
        />
        <button type="submit">Submit Post</button>
      </form>
    </main>
  )
}

export default NewPost
