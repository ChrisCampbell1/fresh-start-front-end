import { useState } from "react"
import styles from './NewReview.module.css'


const NewReview = (props) => {
  const [form, setForm] = useState({ content: '', rating : '0' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(form)
    setForm({ content: '', rating : '0' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="content"
        id="text-input"
        value={form.content}
        placeholder="Add a Review"
        onChange={handleChange}
      />
      <select name="rating" id="rating-select" onChange={handleChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewReview