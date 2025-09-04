import { IoCaretUp } from 'react-icons/io5'

function ScrollUp() {
    return (
        <>
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='fixed md:bottom-[50px] bottom-4 md:right-[50px] right-4 bg-[#138082] text-white p-3 rounded-full cursor-pointer hover:bg-[#143432] hover:text-white transition ease-in-out duration-300 shadow-2xl'>
                <IoCaretUp />
            </div>
        </>
    )
}

export default ScrollUp