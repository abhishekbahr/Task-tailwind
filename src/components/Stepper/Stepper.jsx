import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import AboutPage from '../About/AboutPage';
import Interested from '../Interested/Interested';
import RighPlacePage from '../AnotherPages/RighPlacePage';
import ComfortLevel from '../ComfortLevel/ComfortLevel';
import OnYourWayPage from '../AnotherPages/OnYourWayPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
    }
    export default function Stepper() {
    const [progress, setProgress] = React.useState(20);
    
    const handleNext = () => {
        if(progress<100){
            setProgress((prev) => prev + 20)
        }
    }
    const handlePrevious = () => {
        if(progress>20){
            setProgress((prev) => prev - 20)
        }
    }           

    return (
        <div>
            <div className='flex flex-row gap-4  sticky top-0 z-10 bg-white'>
                {progress>20 && <div onClick={handlePrevious}><FontAwesomeIcon className='text-lg' icon={faLessThan} /></div>}
                <div className='flex-1 mt-2'>
                    <Box  sx={{ width: '100%' }}>
                        <LinearProgressWithLabel  value={progress} />
                    </Box>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div>
                    {progress == 20 && <AboutPage/>}
                    {progress == 40 && <Interested/>}
                    {progress == 60 && <RighPlacePage/>}
                    {progress == 80 && <ComfortLevel/>}
                    {progress == 100 && <OnYourWayPage/>}
                </div>
                <div>
                    {progress<100 ? 
                        <button className='text-2xl p-2 rounded-xl text-white bg-black hover:bg-gray-700' onClick={handleNext}>Continue</button>:
                        <Link className='text-2xl p-2 rounded-xl text-white bg-black' to="/searching">Continue</Link>    
                    }
                </div>
            </div>
        </div>
    );
}
