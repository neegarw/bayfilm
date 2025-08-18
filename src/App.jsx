import Main from "./components/main/Main"
import { Route, Routes, useLocation } from "react-router-dom"
import Landing from "./components/Layout/Landing"
import Gallery from "./components/galery/Gallery"
import GalleryLayout from "./components/Layout/GalleryLayout"
import { useEffect } from "react"
import { scrollYuxari } from "./components/utils/ScrolTop"

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollYuxari()
  }, [pathname])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/gallery" element={<GalleryLayout />}>
          <Route index element={<Gallery />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App