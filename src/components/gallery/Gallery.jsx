import { useEffect, useState } from "react";
import Nav from "../header/Nav"
import ScrollUp from "../scrollUp/ScrollUp"
import OneImg from "./OneImg"
import ThreeImg from "./ThreeImg"
import { getGallery } from "../../utils/api";
import { useParams } from "react-router-dom";

function Gallery() {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getGallery(id).then((res) => setData(res.data));
    }, [id])

    return (
        <>
            <div className="bg-[#0b0b0b] px-4 md:px-[50px] lg:px-[100px] w-full ">
                <Nav />
                <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-wrap gap-[24px] py-[50px]">
                    {data[0]?.type === "FULL" && <OneImg data={data[0]?.galery} />}
                    {data[0]?.type === "TREE" && <ThreeImg data={data[0]?.galery} />}
                </div>
            </div>
            <ScrollUp />
        </>

    )
}

export default Gallery
