import BodyHeaderContent from '../BodyHeaderContent/BodyHeaderContent'
import Styles from './BodyHeader.module.css'

const BodyHeader = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.upper_container}>
            <BodyHeaderContent />
        </div>
    </div>
  )
}

export default BodyHeader