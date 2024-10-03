import Styles from  './Hamburger.module.css'

const Hamburger = () => {
    const barArray = Array(3).fill(null);
  return (
    <div className={Styles.container}>
       {
            barArray.map((_, index) => (
                <span key={index} className={Styles.bar}></span>
            ))
       }
    </div>
  )
}

export default Hamburger