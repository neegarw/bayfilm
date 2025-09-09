import GridGalery from './GridGalery'
import { Link } from 'react-router-dom';
import ScrollUp from '../scrollUp/ScrollUp';
import { useEffect, useState } from 'react';
import { getLanding } from '../../utils/api';
import { axiosInstance } from '../../utils/instance';


function Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getLanding().then((res) => setData(res.data));
    }, [])

    return (
        <>
            <div className='bg-[#191919] px-4 md:px-[50px] lg:px-[100px]'>
                <GridGalery data={data[0]?.grid_images} />
                <div>
                    <Link to="/category" className='py-[15px] md:py-[20px] lg:py-[30px]'>
                    <button className='lg:text-[30px] md:text-[25px] text-[20px] capitalize border-[2px] border-[#fff6c3] text-[#ff5e00] w-full rounded-[80px] py-[10px] flex items-center justify-center hover:text-[#fff6c3] transition ease-in-out duration-300 cursor-pointer'>GALLERY</button>
                </Link>
                <section id="about" className='flex flex-col md:flex-row md:gap-[50] lg:gap-[120px] items-start justify-between px-4 gap-[20px] py-[30px]'>
                    <div className="w-full md:w-[60%]">
                        <h2 className="text-[#FFF6C3] lg:text-[50px] md:text-[30px] text-[26px] font-[500] w-[300px]">{data[0]?.title}</h2>
                        <h4 className="text-[#FF5E00] lg:text-[26px] md:text-[22px] text-[18px]">{data[0]?.label}</h4>
                        <p className="text-[#FFF6C3] text-[14px] md:text-[16px] lg:text-[20px] text-justify md:text-left">{data[0]?.description}</p>
                    </div>
                    <div className="md:w-[40%] w-full">
                        <img className=" h-[400px] md:h-[500px] md:w-[450px] w-full object-cover rounded-[20px]" src={`${axiosInstance.defaults.baseURL}${data[0]?.about_image}`} alt="musayev" />
                    </div>
                </section>
                <div className='py-[15px] md:py-[20px] lg:py-[30px]'>
                    <Link to="/contact" className='lg:text-[30px] md:text-[25px] text-[20px] capitalize border-[2px] border-[#fff6c3] text-[#ff5e00] w-full rounded-[80px] py-[10px] flex items-center justify-center hover:text-[#fff6c3] transition ease-in-out duration-300'>GET IN TOUCH</Link>
                </div>
                </div>
            </div>
            <ScrollUp />
        </>

    )
}

export default Main