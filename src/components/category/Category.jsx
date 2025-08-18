import Nav from "../header/Nav"
import OneImg from "./OneImg"
import ThreeImg from "./ThreeImg"
import testImg from "../../assets/imgs/testImg.png";

function Category() {

    return (
        <div className="bg-[#0b0b0b] px-4 md:px-[50px] lg:px-[100px] w-full ">
            <Nav />
            <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-wrap gap-[24px]">
                <OneImg />
                <ThreeImg />
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
                <div className="w-full min-[400px]:w-[calc((100%-24px)/2)] min-[770px]:w-[calc((100%-48px)/3)] min-[1280px]:w-[calc((100%-72px)/4)]">
                    <img src={testImg} className="size-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Category
