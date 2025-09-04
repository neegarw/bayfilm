import Nav from "../header/Nav"
import ScrollUp from "../scrollUp/ScrollUp"
import OneImg from "./OneImg"
import ThreeImg from "./ThreeImg"

function Category() {

    return (
        <>
            <div className="bg-[#0b0b0b] px-4 md:px-[50px] lg:px-[100px] w-full ">
                <Nav />
                <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-wrap gap-[24px] py-[50px]">
                    <OneImg />
                    <ThreeImg />
                    <ThreeImg />
                    <ThreeImg />
                    <OneImg />
                    <ThreeImg />
                    <ThreeImg />
                    <ThreeImg />
                </div>
            </div>
            <ScrollUp />
        </>

    )
}

export default Category
