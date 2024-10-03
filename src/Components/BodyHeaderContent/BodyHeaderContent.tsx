import Styles from './BodyHeaderContent.module.css'

const BodyHeaderContent = () => {
  return (
    <div className={Styles.content_container}>
        <p className={Styles.heading}>An easier trip, each time</p>
        <p className={Styles.text_content}>Imagine checking one place for your travel details and getting a 
            heads up as things happen throughout your trip. See why life without TripIt is a distant memory for 
            millions of travelers.
        </p>
        <div className={Styles.btn}>
                Get Started
        </div>
    </div>
  )
}

export default BodyHeaderContent