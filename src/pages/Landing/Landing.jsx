import styles from './Landing.module.css'
import Feed from '../../components/Feed/Feed'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ? 
      <>
      <h1>Welcome, {user.name}</h1>
      <h3>needs dynamic rendering based on following length</h3>
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
