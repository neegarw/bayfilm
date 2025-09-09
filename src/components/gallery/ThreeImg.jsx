import { axiosInstance } from "../../utils/instance";

function ThreeImg({ data }) {
    if (!data || !data.length) return null;
    return (
        <div className="flex w-full max-[600px]:gap-[10px] gap-[24px]">
            {data.map((img, index) => (
                <div key={index} className="max-[600px]:w-[calc((100%-20px)/3)] w-[calc((100%-48px)/3)] aspect-[2/3] overflow-hidden rounded-[10px]">
                    <img src={`${axiosInstance.defaults.baseURL}${img}`} className="w-full h-full object-cover" alt={`img-${index}`} />
                </div>
            ))}
        </div>
    )
}


export default ThreeImg;
