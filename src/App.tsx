import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Styles from './App.module.css'
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div className={Styles.container} >
      <NavBar />
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default App