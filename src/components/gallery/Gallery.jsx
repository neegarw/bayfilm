import { useEffect, useState } from "react";
import Nav from "../header/Nav"
import ScrollUp from "../scrollUp/ScrollUp"
import OneImg from "./OneImg"
import ThreeImg from "./ThreeImg"
import { getGallery } from "../../utils/api";
import { useParams } from "react-router-dom";
import FullImg from "./FullImg";
import VideoPlayer from "./VideoPlayer";
import GridImg from "./GridImg";

function Gallery() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    console.log(data);

    useEffect(() => {
        getGallery(id).then((res) => setData(res));
    }, [id])

    return (
        <>
        <Nav />
            <div className="bg-[#0b0b0b] px-4 md:px-[50px] lg:px-[100px] w-full absolute top-0 left-0 py-[100px]">
                <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-wrap gap-[24px] py-[50px]">
                    {
                        data?.map((item, index) => (
                            item.type === 'ONE' ? <OneImg key={index} {...item} />
                                : item.type === 'TREE' ?
                                    <ThreeImg key={index} {...item} />
                                    : item.type === 'FULL' ?
                                        <FullImg key={index} {...item} /> :
                                        item.type === 'VIDEO' ?
                                            <VideoPlayer key={index} {...item} /> :
                                            item.type === 'GRID' ?
                                                <GridImg key={index} {...item} /> : null
                        ))
                    }
                </div>
            </div>
            <ScrollUp />
        </>

    )
}

export default Gallery
