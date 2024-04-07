import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const ProcessingPage = () => {
    const [progress, setProgress] = useState(0);
    const [forward,setForward] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
        if (progress < 100) {
            setProgress(progress + 1);
        } else {
            clearInterval(interval);
            setForward(1)
        }
        }, 35);

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className='p-36 mx-40 max-sm:mx-2 flex flex-col justify-center  items-center'>
            <div className="relative flex justify-center items-center">
            <svg  style={{transform: 'rotate(-90deg)'}} width="120" height="120">
                <circle
                stroke="#F2B138"
                strokeWidth="14"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                style={{
                    transition: 'stroke-dashoffset 0.35s',
                    strokeDasharray: 314, // Circumference of a circle with radius 50 (2 * π * 50)
                    strokeDashoffset: 314 - (progress / 100) * 314
                }}
                />
            </svg>
            {forward ? navigate('/learningPath') : <div className="absolute text-2xl">{progress}%</div> }
            </div>
            <h1 className='text-3xl font-bold text-center max-sm:text-2xl '>Finding learning path recommendations for you based on your responses</h1>
        </div>
    );
};

export default ProcessingPage;
