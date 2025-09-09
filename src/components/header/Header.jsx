import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import bg from "../../assets/imgs/bg.webp";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { getLanding } from "../../utils/api";
import { axiosInstance } from "../../utils/instance";

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getLanding().then((res) => setData(res.data));
        console.log(data);

    }, [])

    return (
        <header
            style={{ backgroundImage: `url(${axiosInstance.defaults.baseURL}${data[0]?.header_img})` }}
            className="h-screen w-full bg-cover bg-center"
        >
            <nav className="text-[#fff6c3] flex flex-row  md:flex-col items-center md:items-start justify-between md:justify-start px-6 py-6 md:pl-[80px]">
                <ul className="hidden md:flex gap-[24px] text-[20px] font-[700] capitalize">
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
                    <Link to="/category" className="cursor-pointer">GALLERY</Link>
                    <Link to='/contact' className="cursor-pointer">CONTACT</Link>
                </ul>
                <Link to="/" className="text-[32px] sm:text-[38px] md:text-[50px] font-bold pl-[5px]"><h1>BAYFILM</h1></Link>

                <div className="md:hidden">
                    <button onClick={() => setSidebarOpen(true)}>
                        <HiMenuAlt3 className="text-3xl text-[#fff6c3]" />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-[80%] bg-[#191919] text-[#fff6c3] transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"
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
                    <Link to="/category" className="cursor-pointer">GALLERY</Link>
                    <Link to="/contact" className="cursor-pointer">CONTACT</Link>
                </ul>
            </div>

        </header>
    );
}

export default Header;
