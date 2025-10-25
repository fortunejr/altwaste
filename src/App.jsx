import { Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage'
import ScrollToTop from "./Components/ScrollToTop.jsx"
import Nav from "./Components/Nav/Nav.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {

  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
