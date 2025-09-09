import { axiosInstance } from '../../utils/instance'

function FullImg({ galery, description, title }) {
    if (!galery) return null;

    return (
        <>
            <div className='w-full h-[300px]'>
                <img
                    src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                    className="w-full object-cover"
                    alt={title}
                />
            </div>
        </>
    )
}

export default FullImg