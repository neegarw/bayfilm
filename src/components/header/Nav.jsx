import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Nav({ setScrollToAbout }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <nav className="flex items-center justify-between w-full py-4 bg-transparent text-[#FFF6C3] px-4 md:px-[100px]">
                {/* Logo */}
                <div className="flex-1">
                    <Link to="/" className="text-[30px] md:text-[48px] font-bold">
                        <h1>BAYFLIM</h1>
                    </Link>
                </div>

                {/* Menu */}
                <ul className="hidden md:flex flex-1 justify-end gap-10 md:gap-20 text-lg font-medium">
                    <Link
                        to="/#about"
                        onClick={() => setSidebarOpen(false)} // mobil menyunu bağlamaq üçün
                        className="cursor-pointer"
                    >
                        ABOUT
                    </Link>

                    <Link to='/gallery' className="cursor-pointer">GALLERY</Link>
                    <Link to='/contact' className="cursor-pointer">CONTACT</Link>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setSidebarOpen(true)}
                >
                    <FiMenu />
                </button>
            </nav>


            {/* Sidebar (Mobile) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#FFF6C3] text-[#191919] transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-3xl"
                    onClick={() => setSidebarOpen(false)}
                >
                    <FiX />
                </button>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-6 mt-16 ml-6 text-lg">
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

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/70 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    );
}

export default Nav;
