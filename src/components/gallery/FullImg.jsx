import { axiosInstance } from '../../utils/instance'

function FullImg({ galery, description, title }) {
    if (!galery) return null;

    return (
        <>
            <div className='w-full'>
                <img
                    src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                    className="w-full object-cover h-[200px] md:h-[250px] lg:h-[300px] rounded-[15px]"
                    alt={title}
                />
            </div>
        </>
    )
}

export default FullImg