import { axiosInstance } from "../../utils/instance";

function OneImg({ galery, description, title }) {
    if (!galery) return null;
    return (
        <div className="w-full">
            <img    
                src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                className="w-full object-cover"
                alt={title}
            />
        </div>
    )
}


export default OneImg;
