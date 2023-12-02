import pl from '../assets/Planets/planet-5.png'

export default function BAbout() {

    return (
        <div id='about'>
            <div className="w-full  p-12 bg-primary text-teal-50 flex flex-col items-center md:flex-row md:justify-evenly gap-6 ">
                <div className="flex justify-center">
                    <div className="border rounded-xl border-indigo-500 relative ">
                        <img src={pl} alt="planet-5" className='absolute inset-0 left-8 -top-[20%]'
                        />
                        <div className="m-20 mt-32">
                            <div>Founded In</div>
                            <div className='text-xl'>2014</div>
                        </div>
                    </div>
                </div>
                <div className="right w-[20rem] rounded-3xl bg-gradient-to-r from-blue-800 to-gray-900 p-8">
                    <div className='z-0'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sit recusandae totam consectetur blanditiis praesentium doloremque illo hic, vitae voluptatem velit, quidem fuga atque. Recusandae iusto quis ipsum nostrum a.
                    </div>
                </div>
            </div>
        </div>
    )
}