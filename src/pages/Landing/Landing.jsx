import styles from './Landing.module.css'
import Feed from '../../components/Feed/Feed'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ? 
      <>
      <h1>Feed</h1>
      <Feed />
      </>
      
      :
      <>
      <h1>User isn't logged in</h1>
      <h3>Hero and limited feed here</h3>
      </>
      }
    </main>
  )
}

export default Landing
