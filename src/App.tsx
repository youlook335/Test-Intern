import About from "./components/About"
import App_install from "./components/App_install"
import Donate from "./components/Donate"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Rating from "./components/Rating"

function App() {

  return (
    <>
    <Hero/>
    <Feature/>
    <About/>
    <App_install activeStep={0}/>
    <Donate/>
    <Rating/>
    <Footer/>
    </>
  )
}

export default App
