
const LearningPath = (props) => {
    return (
        <button  className=' rounded-lg w-96  max-sm:w-72 cursor-pointer border-2 shadow-lg border-gray-200 flex flex-row max-sm:flex-col  items-center gap-4 max-sm:gap-0.5 hover:scale-105 pl-4 pr-4 py-12 max-sm:py-4 max-sm:pr-2 max-sm:pl-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 ...'>
            <div className='flex flex-col gap-1 max-sm:flex-col max-sm:gap-0'>
                <span className='font-bold text-gray-700 max-sm:font-bold max-sm:text-lg'>{props.optionName} </span>
                <p className='text-gray-500 font-semibold max-sm:font-semibold max-sm:text-1xl'>Build your foundational skills in algebra, geometry, and probability.</p>
            </div>
            <div>
                <img className="w-30 max-sm:w-28 mix-blend-multiply " src={props.imgUrl} alt="icon_image" />
            </div>
        </button>
    )
}

export default LearningPath