import Main from "./components/main/Main"
import { Route, Routes, useLocation } from "react-router-dom"
import Landing from "./components/Layout/Landing"
import GalleryLayout from "./components/Layout/GalleryLayout"
import { useEffect } from "react"
import { scrollYuxari } from "./components/utils/ScrolTop"
import Contact from "./components/contact/Contact"
import GalleryCategory from "./components/category/GalleryCategory"
import Gallery from "./components/gallery/Gallery"

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
        <Route path="/category" element={<GalleryLayout />}>
          <Route index element={<GalleryCategory />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/galery/:id" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App