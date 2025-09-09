import { axiosInstance } from "../../utils/instance";

function OneImg({ galery, description, title }) {
    if (!galery) return null;
    return (
        <div className="w-full">
            <img    
                src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-[15px]"
                alt={title}
            />
        </div>
    )
}


export default OneImg;
