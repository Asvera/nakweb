// import { Parallax , ParallaxLayer } from "@react-spring/parallax"
import { motion } from "framer-motion"

export default function Hero() {


    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-screen bg-herobg bg-cover bg-center'>
            </div>

            <div className='absolute inset-x-0 md:top-[8rem] sm:top-[12rem] top-[14rem] md:text-9xl sm:text-8xl text-6xl font-extrabold'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-yellow-200">
                    Nakshatra
                </span>
            </div>

            <motion.div
            initial={{y:-10}}
            animate={{y:0}}
            transition={{
                delay:1.2,
                duration:2.4,
                repeat: Infinity,
                repeatType: "reverse"
            }}
             className='absolute inset-0 w-full h-screen bg-herofrnt bg-cover bg-center'>
            </motion.div>

            <div className='absolute top-1/2 md:left-[43%] sm:left-[40%] left-[27%] text-white flex gap-4'>
                <div className='py-3 px-2 bg-buttond hover:bg-button rounded-full'>Button 1</div>
                <div className='py-3 px-2 bg-buttond hover:bg-button rounded-full'>Button 2</div>
            </div>

        </div>
    )
}



// <div className="w-screen h-screen relative overflow-hidden grid place-items-center">

// <h1 className='text-white text-9xl font-extrabold relative z-10'>Nakshatra</h1>

// <div className='absolute bg-herobg z-0 bg-bottom'>

// </div>

// <div className=' bg-herobg bg-cover bg-center'>

// </div>

// <img src={HeroBgimg} alt="" />

// <div className=" text-5xl text-white ">
//     <Parallax pages={4}>
//         <ParallaxLayer>
//             <h2>Nak</h2>
//         </ParallaxLayer>

//         <ParallaxLayer offset={1}>
//             <h3>shatra</h3>
//         </ParallaxLayer>
//     </Parallax>
// </div>


// </div>