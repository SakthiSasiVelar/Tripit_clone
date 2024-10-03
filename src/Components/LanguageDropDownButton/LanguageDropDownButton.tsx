import Styles from './LanguageDropDownButton.module.css'
import { AiOutlineGlobal } from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";

const LanguageDropDownButton = () => {
  return (
    <div className={Styles.btn_outer_container}>
            <div className={Styles.btn_inner_container}> 
                 <div className={Styles.dropdown_container}>
                    <div className={Styles.dropdown_icon_container}>
                       <AiOutlineGlobal className={Styles.global_icon}/>
                       <div>EN</div>
                    </div>
                    <div className={Styles.dropdown_arrow_icon_container}> 
                        <RiArrowDropDownFill className={Styles.arrow_icon}/>
                    </div>
                 </div>
            </div>
        </div>
  )
}

export default LanguageDropDownButton