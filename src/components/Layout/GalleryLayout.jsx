import Nav from '../header/Nav'
import { Outlet } from 'react-router-dom'

function GalleryLayout() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full z-50">
                <Nav />
            </div>
            <div className=""> 
                <Outlet />
            </div>
        </div>
    )
}

export default GalleryLayout
