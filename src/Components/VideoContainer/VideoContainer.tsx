import Styles from './VideoContainer.module.css';
import PlayButton from '../../assets/Images/PlayButton.svg'

const VideoContainer = () => {
  return (
        <div className={Styles.container}>
            <div className={Styles.inner_container}>
                <p className={Styles.title}>Take a closer look</p>
                <p className={Styles.description}>Experience what it's like to travel with the TripIt app.</p>
                <img src={PlayButton} alt='play' className={Styles.PlayButton_img}/>
            </div>
        </div>
  )
}

export default VideoContainer