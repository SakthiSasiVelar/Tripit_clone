import BodyBlog from "../../Components/BodyBlog/BodyBlog";
import BodyContent from "../../Components/BodyContent/BodyContent";
import BodyHeader from "../../Components/BodyHeader/BodyHeader"
import FeatureContainer from "../../Components/FeatureContainer/FeatureContainer";
import SignUpContent from "../../Components/SignUpContent/SignUpContent";
import VideoContainer from "../../Components/VideoContainer/VideoContainer";
import Styles from './HomePage.module.css';


const HomePage = () => {
  return (
    <div className={Styles.container}>
       <BodyHeader />
       <BodyContent />
       <BodyBlog />
       <VideoContainer />
       <FeatureContainer />
       <SignUpContent />
    </div>
  )
}

export default HomePage