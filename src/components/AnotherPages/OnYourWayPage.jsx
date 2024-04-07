import React from 'react'
import OnWay from "../../images/OnWay.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const OnYourWayPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 flex flex-row max-sm:p-2  justify-center items-center gap-24 max-sm:flex-row max-sm:gap-10 bg-white rounded-lg ">
            <div className='w-1/3 max-sm:w-1/2 hover:scale-150'>
                <img src={OnWay} alt='image'/>
            </div>
            <div className='flex flex-col justify-center w-2/3 max-sm:w-1/2'>
                <h1 className='text-3xl font-bold max-sm:text-xl'>You're on your way!</h1>
                <p className='max-sm:text-sm mt-4'>
                    <FontAwesomeIcon icon={faStar}  size="lg" style={{color: "#FFD43B"}}/>
                    <FontAwesomeIcon icon={faStar}  size="lg" style={{color: "#FFD43B"}}/>
                    <FontAwesomeIcon icon={faStar}  size="lg" style={{color: "#FFD43B"}}/>
                    <FontAwesomeIcon icon={faStar}  size="lg" style={{color: "#FFD43B"}}/>
                    <FontAwesomeIcon icon={faStar}  size="lg" style={{color: "#FFD43B"}}/>
                </p>
                <p className='font-semibold text-gray-500 italic max-sm:font-extralight max-sm:hidden'>
                    "Through its engaging and well-structured coursed, Brilliant has taught me mathematciall concepts that I previously struggled to understand.
                    I now feel confident approaching both technical job interviews and real world problem solving situations."
                </p>
                <p className='mt-4 italic text-gray-500 font-semibold '>--Jacob S.</p>
            </div>
        </div>
    )
}

export default OnYourWayPage