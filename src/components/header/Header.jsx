import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import bg from "../../assets/imgs/bg.jpg";
import { Link } from "react-router-dom";

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header style={{ backgroundImage: `url(${bg})` }} className="h-screen w-full bg-cover bg-center"
        >
            <nav className="text-[#fff6c3] flex flex-row  md:flex-col items-center md:items-start justify-between md:justify-start px-6 py-6 md:pl-[80px]">
                <ul className="hidden md:flex gap-[24px] text-[24px] font-[700] capitalize">
                    <li
                        className="cursor-pointer"
                        onClick={() => {
                            document.getElementById("about")?.scrollIntoView({
                                behavior: "smooth"
                            });
                            setSidebarOpen(false);
                        }}
                    >
                        ABOUT
                    </li>
                    <Link to="/gallery" className="cursor-pointer">GALLERY</Link>
                    <Link to='/contact' className="cursor-pointer">CONTACT</Link>
                </ul>
                <Link to="/" className="text-[32px] md:text-[72px] font-bold pl-[5px]"><h1>BAYFILM</h1></Link>

                <div className="md:hidden">
                    <button onClick={() => setSidebarOpen(true)}>
                        <FiMenu className="text-3xl text-[#fff6c3]" />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-full bg-[#191919] text-[#fff6c3] transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex justify-end p-6">
                    <button onClick={() => setSidebarOpen(false)}>
                        <FiX className="text-3xl" />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 pl-6 text-[24px] font-[700] capitalize">
                    <Link
                        onClick={() => {
                            document.getElementById("about")?.scrollIntoView({
                                behavior: "smooth"
                            });
                            setSidebarOpen(false);
                        }}
                        className="cursor-pointer">ABOUT</Link>
                    <Link to="/gallery" className="cursor-pointer">GALLERY</Link>
                    <Link to="/contact" className="cursor-pointer">CONTACT</Link>
                </ul>
            </div>

        </header>
    );
}

export default Header;
