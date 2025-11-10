import { Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage'
import ScrollToTop from "./Components/ScrollToTop.jsx"
import Nav from "./Components/Nav/Nav.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import About from "./Pages/About/About.jsx"
import Services from "./Pages/Services/Services.jsx"
import Products from "./Pages/Products/ProductsPage.jsx"
import ProductsPage from "./Pages/Products/ProductsPage.jsx"
import ContactPage from "./Pages/Contact/ContactPage.jsx"

function App() {

  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
