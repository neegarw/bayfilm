import { axiosInstance } from '../../utils/instance'

function GridImg({ galery, description, title }) {
    if (!galery) return null;
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 grid-rows-4 gap-4 md:px-[50px] lg:px-[100px]">
                {galery.map((img, index) => (
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
        </>
    )
}

export default GridImg