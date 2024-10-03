import React from 'react'
import Styles from './Content.module.css'
import { Link } from 'react-router-dom'


interface PropsType{
    title : string,
    description : string,
    quote : string,
    link : string,
    author : string,
    path : string
}

const Content : React.FC<PropsType> = ({title , description , quote , link , author , path}) => {
  return (
    <div className={Styles.container}>
        <p className={Styles.heading}>{title}</p>
        <p className={Styles.text_content}>{description}</p>
        <Link to={path} className={Styles.link}>{link}</Link>
        <p className={Styles.quote}>{quote}</p>
        <div className={`${Styles.quote} ${Styles.author_name} ` }>- {author}.</div>
   </div>
  )
}

export default Content