import obstriaimg from '../assets/obsteria.jpg'

function Events() {
    return (
        <div className=" bg-primary min-h-screen">

            <div className="flex justify-center relative">
                <p className="absolute top-[8.5rem] lg:top-[25vh] mx-auto !leading-normal font-extrabold text-7xl lg:text-9xl bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
                    Events
                </p>
                <p className="absolute top-[14rem] lg:top-[47vh] text-slate-300 text-3xl lg:text-xl mx-auto">
                    Where boredom ends.
                </p>
            </div>

            <section className='mt-[20rem] lg:mt-[30rem] w-full h-full flex justify-center'>
                    <div>
                        <div className='w-[75vw] border border-white shadow-[0_0_50px_10px_rgb(255,0,100)]  lg:mt-24 my-10 rounded-xl flex lg:flex-row flex-col-reverse justify-between '>
                            <div className='w-[40vw] text-white py-5 pl-5 lg:!py-10 lg:!pl-10 !pr-0 lg:p-10 z-10'>
                                <h1 className="text-4xl lg:text-5xl font-bold">Obsteria Moksha'23</h1>

                                <div className='w-fit p-4 lg:p-0 items-center mt-4 lg:my-8  lg:py-5 shadow-[0_0_5px_-10px_rgb(0,0,0)] text-white bg-gray-700 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 flex'>
                                    <div className='flex'>
                                        <div className="text-center flex flex-col gap-2 px-5 border-r border-slate-600">
                                            <h1 className="text-xl lg:text-lg font-semibold">Location</h1>
                                            <p className="text-base lg:text-md">NSUT Admin Block</p>
                                        </div>
                                        <div className="text-center flex flex-col gap-2 px-5 ">
                                            <h1 className="text-xl lg:text-lg font-semibold">Date & Time</h1>
                                            <p className="text-base lg:text-md">7/4/2023</p>
                                            <p className="text-base lg:text-md">12:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='py-5'>
                                    <a href="#" className="bg-gradient-to-r from-amber-500 to-pink-500  lg:ml-0  shadow-slate-800 focus:shadow-sm focus:shadow-slate-700 hover:shadow-lg hover:shadow-slate-900 hover:to-amber-700  hover:from-to-pink-600 rounded-full lg:px-10 px-5 lg:py-2 py-1 lg:mr-5  lg:text-lg font-normal lg:font-bold block lg:block">
                                        Register
                                    </a>
                                </div>

                            </div>
                            <img className="overflow-x-hidden h-[10rem] rounded-t-xl lg:rounded-r-xl lg:w-[50rem] lg:h-[25rem] object-cover z-5" alt="Event Poster" src={obstriaimg} />
                        </div>
                        
                        <div className='w-[75vw] border border-white shadow-[0_0_50px_10px_rgb(255,0,100)]  lg:mt-24 my-10 rounded-xl flex lg:flex-row flex-col-reverse justify-between '>
                            <div className='w-[40vw] text-white py-5 pl-5 lg:!py-10 lg:!pl-10 !pr-0 lg:p-10 z-10'>
                                <h1 className="text-4xl lg:text-5xl font-bold">Obsteria Moksha'23</h1>

                                <div className='w-fit p-4 lg:p-0 items-center mt-4 lg:my-8  lg:py-5 shadow-[0_0_5px_-10px_rgb(0,0,0)] text-white bg-gray-700 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 flex'>
                                    <div className='flex'>
                                        <div className="text-center flex flex-col gap-2 px-5 border-r border-slate-600">
                                            <h1 className="text-xl lg:text-lg font-semibold">Location</h1>
                                            <p className="text-base lg:text-md">NSUT Admin Block</p>
                                        </div>
                                        <div className="text-center flex flex-col gap-2 px-5 ">
                                            <h1 className="text-xl lg:text-lg font-semibold">Date & Time</h1>
                                            <p className="text-base lg:text-md">7/4/2023</p>
                                            <p className="text-base lg:text-md">12:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='py-5'>
                                    <a href="#" className="bg-gradient-to-r from-amber-500 to-pink-500  lg:ml-0  shadow-slate-800 focus:shadow-sm focus:shadow-slate-700 hover:shadow-lg hover:shadow-slate-900 hover:to-amber-700  hover:from-to-pink-600 rounded-full lg:px-10 px-5 lg:py-2 py-1 lg:mr-5  lg:text-lg font-normal lg:font-bold block lg:block">
                                        Register
                                    </a>
                                </div>

                            </div>
                            <img className="overflow-x-hidden h-[10rem] rounded-t-xl lg:rounded-r-xl lg:w-[50rem] lg:h-[25rem] object-cover z-5" alt="Event Poster" src={obstriaimg} />
                        </div>

                    </div>
            </section>

        </div>
    )
}

export default Events