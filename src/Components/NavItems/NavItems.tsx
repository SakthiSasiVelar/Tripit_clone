import { Link } from 'react-router-dom'
import Styles from './NavItems.module.css'
import { navItems } from '../../utils/navItems'
import { NavItemType } from '../../Types/common'
import Hamburger from '../Hamburger/Hamburger'
import LanguageDropDownButton from '../LanguageDropDownButton/LanguageDropDownButton'



const NavItems = () => {
  return (
    <>
        <div className={Styles.container}>
        {
            navItems.map((item : NavItemType) => {
                return <Link to={item.path} className={Styles.nav_item_text} key={item.name}>{item.name}</Link>
            })
        }
        <div className={Styles.btn_outer_container}>
            <div className={Styles.btn_inner_container}>
                    <div>Sign Up-It's Free</div>
                </div>
        </div> 
        <LanguageDropDownButton />
        </div>
        <div>
          <Hamburger />
        </div>
        
        
    </>
  )
}

export default NavItems