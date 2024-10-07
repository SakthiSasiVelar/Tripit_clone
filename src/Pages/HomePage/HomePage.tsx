import { Suspense } from "react";
import BodyBlog from "../../Components/BodyBlog/BodyBlog";
import BodyContent from "../../Components/BodyContent/BodyContent";
import BodyHeader from "../../Components/BodyHeader/BodyHeader"
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import FeatureContainer from "../../Components/FeatureContainer/FeatureContainer";
import SignUpContent from "../../Components/SignUpContent/SignUpContent";
import VideoContainer from "../../Components/VideoContainer/VideoContainer";
import Styles from './HomePage.module.css';


const HomePage = () => {
  return (
    <div className={Styles.container}>
       <BodyHeader />
       <ErrorBoundary>
         <Suspense fallback={<div>Loading...</div>}>
            <BodyContent />
         </Suspense>
       </ErrorBoundary>
       <BodyBlog />
       <VideoContainer />
       <FeatureContainer />
       <SignUpContent />
    </div>
  )
}

export default HomePage