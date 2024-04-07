import arithematic from  '../../images/Arithemetic.png'
import basicAlgebra from "../../images/BasicAlgebra.png"
import interAlgebra from "../../images/IntermediateAlgebra.png"
import calculus from "../../images/Calculus.png"

const ComfortLevel = () => {

    const options = [
        { id: 1, icon : arithematic, type:"Arithemetic", level:"Introductory" },
        { id: 2, icon : basicAlgebra, type:"Basic Algebra", level:"Foundational" },
        { id: 3, icon : interAlgebra, type:"Intermediate Algebra", level:"Intermediate" },
        { id: 4, icon : calculus, type:"Calculus", level:"Advanced" },
    ];
    
    return (
        <div className="max-w-3xl mx-auto p-6 flex flex-col  justify-center items-center gap-14 bg-white  rounded-lg">
            <div className='flex flex-col justify-center gap-2 items-center'>
                <h1 className='text-3xl font-mono font-bold max-sm:text-xl '>What is your math comfort level?</h1>
                <p className='font-semibold text-gray-500 max-sm:font-mono'>Choose the highest level you feel confident in -- you can always adjust later.</p>
            </div>
            <div className="flex flex-row gap-6 max-sm:flex-col ">
                {options.map((option) => {
                        return (
                                <button key={option.id} className=' rounded-lg w-44 cursor-pointer border-2 shadow-lg border-gray-200 flex flex-col  items-center gap-4 hover:scale-105 pl-4 pr-4 py-6 max-sm:py-4 max-sm:pr-2 max-sm:pl-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 ...'>
                                    <div>
                                        <img className="w-30 max-sm:h-10 mix-blend-multiply " src={option.icon} alt="icon_image" />
                                    </div>
                                    <div className='flex flex-col gap-1 max-sm:flex-col max-sm:gap-0'>
                                        <span className='font-bold text-gray-700 max-sm:font-medium max-sm:text-sm'>{option.type}</span>
                                        <p className='text-gray-500 font-semibold max-sm:font-semibold max-sm:text-1xl'>{option.level}</p>
                                    </div>
                                </button>
                            ) 
                        })
                }
            </div>
        </div>
    )
}

export default ComfortLevel