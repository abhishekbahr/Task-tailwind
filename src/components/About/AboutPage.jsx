
const AboutPage = () => {

    const options = [
        { id: 1, label: 'or soon to be enrolled',role:'Student', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpLVxw_nBIn3Qdq61lR4det9vNOp0nFI_Qzbq-xqyDA&s' },
        { id: 2, label: ' pursuing a career',role:'Professional', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxc9VlckeSX72HuU5h_Hs52Jm3U9Yf4LBRcIEWk0V7A&s' },
        { id: 3, label: ' of a school-age child',role:'Parent', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZV4O8m6tVsq9DrRaghRCJaArqdJ_I3QIPQ&s' },
        { id: 4, label: '',role:'Lifelong Learner', icon: 'https://w7.pngwing.com/pngs/41/862/png-transparent-student-higher-education-study-skills-learning-products-people-logo-teacher-thumbnail.png' },
        { id: 5, label: '',role:'Teacher', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn6y4tTWQO8SHR3jssujOZ5aStrnP8Si6sQ&s' },
        { id: 6, label: '',role:'Other', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sfyFfX6MYceGQWnBrzFiPy2HSuEmOn_Njg&s' },
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 flex flex-col  justify-center items-center gap-14 bg-white rounded-lg ">
            <div className='flex flex-col justify-center gap-2 items-center'>
                <h1 className='text-3xl font-bold max-sm:text-2xl '>Which describes you best?</h1>
                <p className='font-semibold text-gray-500 max-sm:font-mono'>This will help us personalize your experience</p>
            </div>
            <div className="flex flex-col gap-6">
                {options.map((option) => {
                    return (
                            <button key={option.id} className=' rounded-lg cursor-pointer border-2 shadow-sm border-gray-200 flex flex-row gap-6 pl-6 pr-56 py-2 max-sm:pr-8 max-sm:pl-2 max-sm:grid-cols-2 hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 ...'>
                                <div className="max-sm:w-1/2">
                                    <img className="w-10 max-sm:w-28" src={option.icon} alt="icon_image" />
                                </div>
                                <div className='flex flex-row gap-2 items-center max-sm:w-1/2 max-sm:flex-col max-sm:gap-0'>
                                    <span className='font-bold text-gray-700 max-sm:font-medium max-sm:text-sm'>{option.role}</span>
                                    <p className='text-gray-500 font-semibold max-sm:font-light max-sm:text-sm'>{option.label}</p>
                                </div>
                            </button>
                        ) 
                    })
                }
            </div>
        </div>
    );
};

export default AboutPage;