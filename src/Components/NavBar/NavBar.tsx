import Logo from '../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={Styles.outer_container}>
        <div className={Styles.inner_container}>
           <Logo />
           <NavItems />
        </div>
        
    </div>
  )
}

export default NavBar