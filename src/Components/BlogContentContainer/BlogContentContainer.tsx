import Styles from './BlogContentContainer.module.css'
import { contents } from '../../utils/homepageBlogContent'
import BlogCardContainer from '../BlogCardContainer/BlogCardContainer'

const BlogContentContainer = () => {
  return (
    <div className={Styles.container}>
        {
          contents.map((content) =>{
            return <BlogCardContainer key={content.id} {...content} />
          })
        }
    </div>
  )
}

export default BlogContentContainer