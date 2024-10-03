import Styles from './SignUpContent.module.css'
import { Link } from 'react-router-dom'

const SignUpContent = () => {
  return (
    <div className={Styles.outer_container}>
       <div className={Styles.inner_container}> 
          <p className={Styles.title}>Try the travel app that keeps up with you</p>
          <p className={Styles.description}>So many trips, so little time. Let TripIt worry about the details, so you don't have to.</p>
          <Link to='/free' className={Styles.btn}>Sign Up-It's Free!</Link>
       </div>
    </div>
  )
}

export default SignUpContent