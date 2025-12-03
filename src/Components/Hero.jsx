import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex mt-20 mx-auto'>
      <div className='absolute top-[120px] p-0 lg:px-16 inset-0 flex flex-row items-start gap-5 max-w-7xl ml-8'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 bg-[#915eff] rounded-xl' />
          <div className='w-1 h-100 violet-gradient' />
        </div>

        <div>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi, I am <span className='text-[#915eff]'>Abimanyu</span></h1>
          <p className='mt-5 text-[#dfd9ff] font-extralight lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>one who sculpts with code and paint with pixels.</p>
          
          <button className='mt-10 p-2 border-2 border-indigo-600 bg-blue-700 text-white rounded-md hover:bg-transparent hover:cursor-pointer'>
            <a href="https://flowcv.com/resume/7859qes4vsgj">Resume</a>
          </button>

          <div className='flex flex-col sm:flex-row items-start sm:items-center mt-12 gap-4'>
            <a className='flex items-center p-2 rounded-lg text-blue-500 gap-1 hover:bg-blue-800 hover:text-white' href="https://www.linkedin.com/in/abimanyu-s-251b55321/"> <LinkedInIcon /> <span>LinkedIn</span></a>
            <a className='flex items-center p-2 rounded-lg text-blue-500 gap-1 hover:bg-orange-600 hover:text-white' href="https://github.com/abimanyu2515"> <GitHubIcon /> <span>GitHub</span></a>
            <a className='flex items-center p-2 rounded-lg text-blue-500 gap-1 hover:bg-green-600 hover:text-white' href="mailto:abimanyus0406@gmail.com"> <MailOutlineIcon /><span>Email</span></a>
            {/* <div><a className='flex items-center p-2 rounded-lg text-blue-500 gap-1 hover:bg-pink-500 hover:text-white' href="https://www.instagram.com/abimanyu_2504/"> <InstagramIcon /><span>Instagram</span></a></div> */}
          </div>

          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center max-lg:hidden'>
            <a href="#about">
              <div className='w-[35px] h-[60px] rounded-full border-4 border-blue-200 flex justify-center items-start p-1'>
                <motion.div
                  animate={{y: [0, 24, 0]}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className='w-3 h-3 rounded-full bg-blue-200 mb-1'
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero