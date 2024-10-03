import BlogContentContainer from '../BlogContentContainer/BlogContentContainer'
import Styles from './BlogContainer.module.css'

const BlogContainer = () => {
  return (
    <div className={Styles.container}>
       <div className={Styles.title}>More from our blog</div>
       <BlogContentContainer />
    </div>
  )
}

export default BlogContainer