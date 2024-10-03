import Styles from './BlogCardContainer.module.css'
import { BlogType } from '../../Types/common'
import React from 'react'
import BlogContentImage from '../BlogContentImage/BlogContentImage'
import BlogContent from '../BlogContent/BlogContent'

const BlogCardContainer : React.FC<BlogType> = ({image , imageDescription , title , path , description }) => {
  return (
    <div className={Styles.container}>
        <BlogContentImage image={image} imageDescription={imageDescription}/>
        <BlogContent title={title} path={path} description={description} />
    </div>
  )
}

export default BlogCardContainer