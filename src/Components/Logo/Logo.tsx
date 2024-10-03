import Tripit from '../../assets/Logo/logo-tripit.svg';
import Styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={Styles.container}>
        <img src={Tripit} alt="Tripit" />
    </div>
  )
}

export default Logo