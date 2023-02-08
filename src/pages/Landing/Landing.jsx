import styles from './Landing.module.css'
import Feed from '../../components/Feed/Feed'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user && <Feed user={user} />}
    </main>
  )
}

export default Landing
