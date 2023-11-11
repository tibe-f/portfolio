import Intro from "./components/intro/intro"
import Navbar from "./components/navbar/navbar"
import Skills from "./components/skils/skils"
import Works from "./components/works/works"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact />
      <Footer />
     </>
  )
}

export default App
