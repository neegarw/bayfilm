import { Link } from "react-router-dom";
import g1 from "../../assets/imgs/g1.png";
import g2 from "../../assets/imgs/g2.png";
import g3 from "../../assets/imgs/g3.png";
import ScrollUp from "../scrollUp/ScrollUp";


function Gallery() {
    return (
        <>
            <div className="">
                <Link to="/category" style={{ backgroundImage: `url(${g1})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[40px] md:text-[80px]">
                    <h3>NATURE</h3>
                </Link>
                <Link to="/category" style={{ backgroundImage: `url(${g2})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[40px] md:text-[80px]">
                    <h3>PORTRAIT</h3>
                </Link>
                <Link to="/category" style={{ backgroundImage: `url(${g3})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[40px] md:text-[80px]">
                    <h3>VIDEO</h3>
                </Link>
                <Link to="/category" style={{ backgroundImage: `url(${g1})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[40px] md:text-[80px]">
                    <h3>COMMERCİAL</h3>
                </Link>
            </div>
            <ScrollUp />
        </>
    )
}

export default Gallery