import g1 from "../../assets/imgs/g1.png";
import g2 from "../../assets/imgs/g2.png";
import g3 from "../../assets/imgs/g3.png";


function Gallery() {
    return (
        <>
            <div className="">
                <div style={{ backgroundImage: `url(${g1})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[50px] md:text-[100px]">
                    <h3>NATURE</h3>
                </div>
                <div style={{ backgroundImage: `url(${g2})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[50px] md:text-[100px]">
                    <h3>PORTRAIT</h3>
                </div>
                <div style={{ backgroundImage: `url(${g3})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[50px] md:text-[100px]">
                    <h3>VIDEO</h3>
                </div>
                <div style={{ backgroundImage: `url(${g1})` }} className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[50px] md:text-[100px]">
                    <h3>COMMERCİAL</h3>
                </div>
            </div>
        </>
    )
}

export default Gallery