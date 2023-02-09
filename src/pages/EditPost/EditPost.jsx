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
  const [photoData, setPhotoData] = useState(null)
  const [journeys, setJourneys] = useState([])

  useEffect(() => {
    const fetchJourneys = async () => {
      const profile = await profileService.getProfile(props.user.profile)
      setJourneys(profile.journeys)
    }
    fetchJourneys()
  }, [props.user.profile])

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData(evt.target.files[0])
  }

  const handleSumbit = async (evt) => {
    evt.preventDefault()
    await postService.update(form, post._id)
    await postService.addPostPhoto(photoData, post._id)
    navigate(`/posts/${post._id}`)
  }

  const handleDeletePost = () => {
    postService.delete(post._id)
    navigate('/')
  }

  return (  
    <main className={styles.container}>
      <h1>Edit Post</h1>
      <form className={styles.form} autoComplete='off' onSubmit={handleSumbit}>
        <div className={styles.inputContainer}>
          <label htmlFor='title-input'>Title</label>
          <textarea
            required
            rows={2}
            cols={25}
            name='title'
            id='title-input'
            value={form.title}
            placeholder='title'
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='category-input'>Category</label>
          <select
            className={styles.category}
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
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='journey-input'>Journey</label>
          <select
            className={styles.journey}
            required
            type='select'
            name='journey'
            id='journey-input'
            value={form.journey}
            onChange={handleChange}
          >
            <option value={form.journey.id}>{form.journey.name}</option>
            {journeys.map(journey => 
              <option key={journey._id} value={journey._id}>{journey.name}</option>  
            )}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='content-input'>Post</label>
          <textarea
            required
            rows={5}
            cols={30}
            name='content'
            id='content-input'
            value={form.content}
            placeholder='Enter your post here'
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          {photoData ?
            <label htmlFor="photo-input" className={styles.photoInput}>Photo Added</label>
              :
              <label htmlFor="photo-input" className={styles.photoInput}>Edit Photo</label>
            }
          <input
            type='file'
            name='photo'
            id='photo-input'
            onChange={handleChangePhoto}
          />
        </div>
        <div>
          <button id={styles.edit}>Edit Post</button>
        </div>
      </form>
      <div className={styles.delete}>
        <button id={styles.delete} onClick={() => handleDeletePost()}>Delete Post</button>
      </div>
    </main>
  )
}

export default EditPost
