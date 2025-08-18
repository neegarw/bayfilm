import testImg from "../../assets/imgs/testImg.png";

function ThreeImg() {

    return (
        <div className="flex w-full items-center max-[600px]:gap-[10px] gap-[24px]">
            <div className="max-[600px]:w-[calc((100%-20px)/3)] w-[calc((100%-48px)/3)] aspect-[2/3]">
                <img src={testImg} className="size-full object-cover" />
            </div>
            <div className="max-[600px]:w-[calc((100%-20px)/3)] w-[calc((100%-48px)/3)] aspect-[2/3]">
                <img src={testImg} className="size-full object-cover" />
            </div>
            <div className="max-[600px]:w-[calc((100%-20px)/3)] w-[calc((100%-48px)/3)] aspect-[2/3]">
                <img src={testImg} className="size-full object-cover" />
            </div>
        </div>
    )
}

export default ThreeImg
