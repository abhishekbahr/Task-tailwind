import LearningPath from "./LearningPath"
import img1 from "../../images/img1.png"
import img2 from '../../images/img2.png'


const PathPage = () => {
    return (
        <div className='max-w-3xl mx-auto mt-32 max-sm:mt-12 p-6 flex flex-col  justify-center items-center gap-14 bg-white  rounded-lg'>
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-3xl font-bold'>Learning paths based on your answers</h1>
                <p className="text-xl font-semibold mt-6 text-gray-400">Choose one to get started. You can switch anytime.</p>
            </div>
            <div className="flex flex-row gap-8  max-md:flex-col">
                <LearningPath 
                    optionName= "Foundational Math"
                    imgUrl = {img1}
                />
                <LearningPath 
                    optionName= "Mathematical Thinking"
                    imgUrl = {img2}
                />
            </div>
        </div>
    )
}

export default PathPage