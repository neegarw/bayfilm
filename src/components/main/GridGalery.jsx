import { axiosInstance } from "../../utils/instance";

function GridGalery({ data }) {
    if (!data) return null; // data gəlməyibsə heç nə göstərmir

    return (
        <div className="py-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 grid-rows-4 gap-4 md:px-[50px] lg:px-[100px]">

                {data.map((img, index) => (
                    <div
                        key={index}
                        className={`w-full h-[250px] rounded-[20px] overflow-hidden ${index === 0 || index === 2 ? 'md:h-[99%] md:row-span-2' : ''}`}
                    >
                        <img
                            src={`${axiosInstance.defaults.baseURL}${img}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default GridGalery;
