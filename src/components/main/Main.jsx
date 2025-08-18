import GridGalery from './GridGalery'
import musayev from "../../assets/imgs/musayev.png";
import { Link } from 'react-router-dom';


function Main() {
    return (
        <div className='bg-[#191919] px-4 md:px-[50px] lg:px-[100px]'>
            <GridGalery />
            <Link to="/gallery" className='py-[15px] md:py-[25px] lg:py-[45px]'>
                <button className='lg:text-[40px] md:text-[30px] text-[20px] capitalize border-[2px] border-[#fff6c3] text-[#ff5e00] w-full rounded-[80px] py-[10px] flex items-center justify-center hover:text-[#fff6c3] transition ease-in-out duration-300'>GALLERY</button>
            </Link>
            <div id="about" className='flex flex-col md:flex-row md:gap-[50] lg:gap-[120px] items-start justify-between px-4 gap-[20px] py-[30px]'>
                <div className="w-full md:w-[60%]">
                    <h2 className="text-[#FFF6C3] lg:text-[60px] md:text-[40px] text-[32px] font-[500]">Bayram musayev</h2>
                    <h4 className="text-[#FF5E00] lg:text-[30px] md:text-[25px] text-[20px]">Photographer</h4>
                    <p className="text-[#FFF6C3] text-[14px] md:text-[18px] lg:text-[22px] text-justify md:text-left">
                        Hi, I’m Bayram Musayev, and my   photography is all about telling stories through visuals. I focus on capturing raw emotions in portraits and creating a deep connection between the subject and the viewer. Whether I’m working with urban landscapes or natural settings, I aim to combine light, perspective, and symmetry to craft dynamic and engaging compositions
                    </p>
                </div>
                <div className="md:w-[40%] w-full">
                    <img className=" h-[400px] md:h-[500px] md:w-[450px] w-full object-cover rounded-[20px]" src={musayev} alt="musayev" />
                </div>
            </div>
            <div className='py-[15px] md:py-[25px] lg:py-[45px]'>
                <Link to="/contact" className='lg:text-[40px] md:text-[30px] text-[20px] capitalize border-[2px] border-[#fff6c3] text-[#ff5e00] w-full rounded-[80px] py-[10px] flex items-center justify-center hover:text-[#fff6c3] transition ease-in-out duration-300'>GET IN TOUCH</Link>
            </div>
        </div>
    )
}

export default Main