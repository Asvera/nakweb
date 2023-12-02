import Naklogo from '/logo.png'

export default function Footer() {

    return(
        <div className="bg-primary text-white p-4" id='footer'>

            <div className="py-4">
                <div className="flex md:justify-evenly md:items-center ">
                    <div className='text-sm flex flex-col items-start '>
                        <div className='text-xl'>The Astronomy and Mathematics Society of Nsut</div>
                        <div className='text-gray-500 hover:text-gray-400' >About</div>
                        <div className='text-gray-500 hover:text-gray-400' >Out team</div>
                        <div className='text-gray-500 hover:text-gray-400' >Events</div>
                        <div className='text-gray-500 hover:text-gray-400' >Information</div>
                        <div className='text-gray-200 hover:text-buttond' >Phone: 921067xxxx </div>
                        <div className='hover:text-buttond'>
                            <a href="mailto:nakshatra@nsut.ac.in">nakshatra@nsut.ac.in</a>
                        </div>
                    </div>
                    <div className='w-40'>
                        <img src={Naklogo} alt="Nakshatra Logo" />
                    </div>
                </div>
            </div>

            <div className=" py-4">
                <div>Copyright © 2023 Nakshatra NSUT</div>
                <div>All Righst Reserved.</div>
            </div>

        </div>
    )
}