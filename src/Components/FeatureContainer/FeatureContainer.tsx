import Styles from './FeatureContainer.module.css'
import { featureCompanies } from '../../utils/featureCompany'

const FeatureContainer = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.inner_container}>
            <p className={Styles.title}>As featured on</p>
            <div className={Styles.img_container}>
                {
                   featureCompanies.map((company , index) =>{
                    return <img src={company.image} alt={company.imageDescription} key={index}/>
                   })
                }
            </div>
       </div>
    </div>
  )
}

export default FeatureContainer