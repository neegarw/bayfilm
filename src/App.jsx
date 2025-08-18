import Main from "./components/main/Main"
import { Route, Routes, useLocation } from "react-router-dom"
import Landing from "./components/Layout/Landing"
import Gallery from "./components/galery/Gallery"
import GalleryLayout from "./components/Layout/GalleryLayout"
import { useEffect } from "react"
import { scrollYuxari } from "./components/utils/ScrolTop"
import Contact from "./components/contact/Contact"
import Category from "./components/category/Category"

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (location.hash === "#about") {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      scrollYuxari();
    }
  }, [pathname]);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/gallery" element={<GalleryLayout />}>
          <Route index element={<Gallery />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App