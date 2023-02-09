import { useState } from "react"
import styles from './NewReview.module.css'


const NewReview = ({ profile, handleAddReview }) => {
  const [form, setForm] = useState({ content: '', rating : '3' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddReview(form)
    setForm({ content: '', rating : '3' })
  }

  return (
    <div className={styles.container}>
      <img src={profile.photo} alt={profile.name} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          required
          type="text"
          name="content"
          id="text-input"
          value={form.content}
          placeholder="Add a Review"
          onChange={handleChange}
        />
        <select name="rating" id="rating-select" onChange={handleChange}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3" selected="selected">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button type="submit"><i className="fas fa-solid fa-plus fa-xl"></i></button>
      </form>
    </div>
  )
}

export default NewReview
