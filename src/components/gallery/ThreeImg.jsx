import { axiosInstance } from "../../utils/instance";

function ThreeImg({ galery, description, title }) {
    if (!galery) return null;
    return (
        <div className="flex w-full max-[600px]:gap-[10px] gap-[24px]">
            {galery.map((img, index) => (
                <div key={index} className="max-[600px]:w-[calc((100%-20px)/3)] w-[calc((100%-48px)/3)] aspect-[2/3] overflow-hidden rounded-[10px]">
                    <h1 className="hidden"> {description}</h1>
                    <img src={`${axiosInstance.defaults.baseURL}${img}`} className="w-full h-full object-cover" alt={title} />
                </div>
            ))}
        </div>
    )
}


export default ThreeImg;
