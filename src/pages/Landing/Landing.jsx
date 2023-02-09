import styles from './Landing.module.css'
import Feed from '../../components/Feed/Feed'
import video from '../../assets/landing-video.mp4'
import heroWhite from '../../assets/hero-white.png'
import { Link } from 'react-router-dom'

const Landing = ({ user, profile }) => {
  return (
    <main className={styles.container}>
      {user?
        <Feed user={user} profile={profile} />
        :
        <div className={styles.landing}>
          <div className={styles.hero}>
            <video src={video}
            playsInline
            autoPlay
            muted
            loop>
            </video> 
            <div className={styles.heroLogo}>
              <img src={heroWhite} alt="FreshStart Logo" />
            </div>
          </div>
          <div className={styles.body}>
            <h1>Ready for a FreshStart?</h1>
            <article>
              <h3>Find Your Journey</h3>
              <p>Want to kickstart your wellness journey but don't know what's right for you?</p>
              <p>Learn about different diet and fitness journeys and see how they work for real people.</p>
            </article>
            <article>
              <h3>Find Transparency</h3>
              <p>Ever wonder what wellness influencers actually do to stay fit?</p>
              <p>FreshStart gives you a glimpse behind the filters and curation to see how real people eat, move, and stay mindfull.</p>
            </article>
            <article>
              <h3>Find Your Audience </h3>
              <p>FreshStart is the place to build a wellness-minded audience.</p>
                <p>Start your profile, select the journeys you specialize in, and post about how you stick with your journey in real life.</p>
            </article>
            <article>
              <h3>Find Accountability</h3>
              <p>Keep track of your progress by posting every day.</p>
                <p>With FreshStart you can track your workouts, meals, and how your wellness journey is making you feel. Follow your friends and find wellness together.</p>
            </article>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Log In</Link>
          </div>
        </div>
      }
      
    </main>
  )
}

export default Landing
