import React from "react"
import { Link } from "react-router-dom";
import Styles from './BlogContent.module.css'

interface PropsType{
    title : string,
    path : string , 
    description : string
}

const BlogContent : React.FC<PropsType> = ({title , path , description}) => {
  return (
     <div className={Styles.container}>
        <Link to={path} className={Styles.title}>{title}</Link>
        <p className={Styles.description}>{description}</p>
     </div>
  )
}

export default BlogContent