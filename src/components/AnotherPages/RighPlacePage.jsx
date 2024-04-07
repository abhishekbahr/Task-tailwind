import RightPlace from '../../images/RightPlace.png'

const RighPlacePage = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 flex flex-row max-sm:p-2  justify-center items-center gap-24  max-sm:gap-10 bg-white rounded-lg ">
            <div className='w-1/3 max-sm:w-1/2 hover:scale-125'>
                <img src={RightPlace} alt='image'/>
            </div>
            <div className='flex flex-col justify-center w-2/3 max-sm:w-1/2'>
                <h1 className='text-3xl font-bold max-sm:text-xl'>You're in the right place</h1>
                <p className='font-semibold text-gray-500 max-sm:font-extralight max-sm:hidden'>
                    Brilliant gets you hands-on to help improve your professional skills and knowledge.
                    You'll interact with concepts and solve fun problems in math, science, and computer science.
                </p>
            </div>
        </div>
    )
}

export default RighPlacePage