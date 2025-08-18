import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Landing() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default Landing