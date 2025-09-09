import { Link } from "react-router-dom";
import ScrollUp from "../scrollUp/ScrollUp";
import { useEffect, useState } from "react";
import { getCategory } from "../../utils/api";
import { axiosInstance } from "../../utils/instance";

function GalleryCategory() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCategory().then((res) => setData(res.data));
    }, [])

    return (
        <>
            <div className="">
                {data.map((item) => (
                    <Link 
                        key={item.id} 
                        to={`/galery/${item.id}`} 
                        style={{ backgroundImage: `url(${axiosInstance.defaults.baseURL}${item.title})` }}
                        className="md:h-[600px] h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-[#FFF7C9] text-[40px] md:text-[80px]"
                    >
                        <h3>{item.image}</h3>
                    </Link>
                ))}
            </div>
            <ScrollUp />
        </>
    )
}

export default GalleryCategory;
