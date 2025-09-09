import { axiosInstance } from "../../utils/instance";

function OneImg({ data }) {
    if (!data || !data.length) return null;
    return (
        <div className="w-full">
            <img 
                src={`${axiosInstance.defaults.baseURL}${data[0]}`} 
                className="w-full object-cover" 
                alt="OneImg" 
            />
        </div>
    )
}


export default OneImg;
