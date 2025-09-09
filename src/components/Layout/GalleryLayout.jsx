import Nav from '../header/Nav'
import { Outlet } from 'react-router-dom'

function GalleryLayout() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}

export default GalleryLayout
