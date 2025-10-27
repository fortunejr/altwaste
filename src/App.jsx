import { Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage'
import ScrollToTop from "./Components/ScrollToTop.jsx"
import Nav from "./Components/Nav/Nav.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import About from "./Pages/About/About.jsx"

function App() {

  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
