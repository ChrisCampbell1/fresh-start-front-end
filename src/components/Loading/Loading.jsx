import styles from './Loading.module.css'
import LoadingIcon from '../../assets/branding/loading-svgrepo.svg'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt="Loading Resource" />
    </main>
  )
}

export default Loading