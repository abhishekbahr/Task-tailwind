

const Interested = () => {

    const options = [
        { id: 1, label: 'Learning specific skills to advance my career', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpLVxw_nBIn3Qdq61lR4det9vNOp0nFI_Qzbq-xqyDA&s' },
        { id: 2, label: ' Exploring new topics Im Interested in', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhS2DigQpCn-mbXWJtPQWydqkCd4Q5uC4IuWUguukDRRu3-jm3IfcGstif98TAoGo0-n4&usqp=CAU' },
        { id: 3, label: 'Refreshing my math foundations', icon: 'https://t4.ftcdn.net/jpg/05/57/11/17/360_F_557111711_9aQFvZG2aM5o8G6jWr5BvN0FyzPlC3Cf.jpg' },
        { id: 4, label: 'Exercising my brain to stay sharp', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoM2eXgSynXTOKAXGw2pmPOxy8U3q3B08yg&s' },
        { id: 5, label: 'Something else', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcZ2v16ujxxaJgSyRl1yXDRSGw1Czh2toqQ&s' },
    ];
    
    return (
        <div className="max-w-3xl mx-auto p-6 flex flex-col  justify-center items-center gap-14 bg-white rounded-lg ">
            <div className='flex flex-col justify-center gap-2 items-center'>
                <h1 className='text-3xl font-bold max-sm:text-2xl '>Which describes you best?</h1>
                <p className='font-semibold text-gray-500 max-sm:font-mono'>This will help us personalize your experience</p>
            </div>
            <div className="flex flex-col gap-6 ">
                {options.map((option) => {
                    return (
                            <button key={option.id} className=' rounded-lg cursor-pointer border-2 shadow-sm border-gray-200 flex flex-row  max-sm:items-center gap-6 pl-6 pr-56 py-2 max-sm:pr-8 max-sm:pl-2 max-sm:grid-cols-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 ...'>
                                <div className="max-sm:w-1/2">
                                    <img className="w-10  max-sm:w-28 mix-blend-multiply" src={option.icon} alt="icon_image" />
                                </div>
                                <div className='flex flex-row gap-2 items-center max-sm:w-1/2 max-sm:flex-col max-sm:gap-0'>
                                    <p className='text-gray-500 font-semibold max-sm:font-light max-sm:text-sm'>{option.label}</p>
                                </div>
                            </button>
                        ) 
                    })
                }
            </div>
        </div>
    );
}

export default Interested