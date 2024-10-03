import Styles from './ContentContainer.module.css'
import ContentImage from "../ContentImage/ContentImage";
import { ContentType } from '../../Types/common';
import Content from '../Content/Content';

const ContentContainer : React.FC<ContentType> = ({id , title , description , link , author , quote , path , image , imageDescription}) => {
  return (
    <div className={Styles.outer_container}>
        <div className={Styles.inner_container}>
              {
                id % 2 ?
                <>
                 <ContentImage image={image} imageDescription={imageDescription}/>
                 <Content title={title} description={description} link={link} author={author} quote={quote} path={path}/>
                </> :
                <>
                 <Content title={title} description={description} link={link} author={author} quote={quote} path={path}/>
                 <ContentImage image={image} imageDescription={imageDescription}/>
                </>
              }
        </div>
    </div>
  )
}

export default ContentContainer