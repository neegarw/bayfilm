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

    useEffect(() => {
        getGallery(id).then((res) => setData(res));
    }, [id])

    return (
        <>
            <div className="bg-[#0b0b0b] px-4 md:px-[50px] lg:px-[100px] w-full ">
                <Nav />
                <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-wrap gap-[24px] py-[50px]">
                    {
                        data?.map((item, index) => (
                            item.type === 'ONE' ? <OneImg key={index} {...item} />
                                : item.type === 'TREE' ?
                                    <ThreeImg key={index} data={item.images} />
                                    : item.type === 'FULL' ?
                                        <FullImg key={index} data={item.images} /> :
                                        item.type === 'VIDEO' ?
                                            <VideoPlayer key={index} data={item.images} /> :
                                            item.type === 'GRID' ?
                                                <GridImg key={index} data={item.images}/> : null
                        ))
                    }
                </div>
            </div>
            <ScrollUp />
        </>

    )
}

export default Gallery
