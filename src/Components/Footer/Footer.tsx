import Logo from '../../assets/Logo/logo-tripit.svg'
import Styles from './Footer.module.css'
import { footerContents } from '../../utils/footerContents'
import FooterContent from '../FooterContent/FooterContent'

const Footer = () => {
  return (
    <div className={Styles.outer_container}>
       <div className={Styles.inner_container}>
          <img src={Logo} alt='Tripit' className={Styles.logo} />
          <div className={Styles.content_container}>
             {
                footerContents.map((content,index) => {
                    return <FooterContent {...content} key={index} />
                })
             }
          </div>
       </div>
    </div>
  )
}

export default Footer