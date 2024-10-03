import React from 'react';
import Styles from './BlogContentImage.module.css'

interface PropsType{
    image : string,
    imageDescription : string
}

const BlogContentImage : React.FC<PropsType> = ({image,imageDescription}) => {
  return (
    <>
       <img src={image} alt={imageDescription} className={Styles.img}/>
    </>
  )
}

export default BlogContentImage