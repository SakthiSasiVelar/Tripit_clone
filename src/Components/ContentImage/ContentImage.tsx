import React from 'react'
import Styles from './ContentImage.module.css'

interface PropsType{
    image : string,
    imageDescription : string
}

const ContentImage : React.FC<PropsType> = ({image , imageDescription}) => {
  return (
    <div>
        <img src={image} alt={imageDescription} className={Styles.phone_img}/>
    </div>
  )
}

export default ContentImage