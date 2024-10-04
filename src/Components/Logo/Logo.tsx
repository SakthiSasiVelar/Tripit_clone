import { Link } from 'react-router-dom';
import Tripit from '../../assets/Logo/logo-tripit.svg';
import Styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link to='/' className={Styles.container}>
        <img src={Tripit} alt="Tripit" />
    </Link>
  )
}

export default Logo