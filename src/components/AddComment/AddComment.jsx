import styles from './AddComment.module.css'

const AddComment = ({ profile, handleSubmit, content, handleCommentContentChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.profilePhoto} src={profile.photo} alt={profile.name} />
      <form autoComplete="off" onSubmit={(evt) => handleSubmit(content, evt)}>
        <input type="text" value={content} onChange={handleCommentContentChange} placeholder="add a comment" />
        <button disabled={!content} className={styles.button} type="submit"><i className="fas fa-solid fa-plus fa-xl"></i></button>
      </form>
    </div>
  )
}

export default AddComment
