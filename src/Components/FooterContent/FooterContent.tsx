import { footerContentsType } from '../../Types/common'
import Styles from './FooterContent.module.css'



const FooterContent : React.FC<footerContentsType> = ({title , contents}) => {
  return (
    <div className={Styles.container}>
       <p className={Styles.title}>{title}</p>
       {
        contents.map((content,index)=>{
            return <p key={index} className={Styles.content}>{content}</p>
        })
       }
    </div>
  )
}

export default FooterContent