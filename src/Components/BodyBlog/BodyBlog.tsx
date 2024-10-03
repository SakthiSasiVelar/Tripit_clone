import BlogContainer from '../BlogContainer/BlogContainer'
import Styles from './BodyBlog.module.css'

const BodyBlog = () => {
  return (
    <div className={Styles.container}>
        <BlogContainer />
    </div>
  )
}

export default BodyBlog