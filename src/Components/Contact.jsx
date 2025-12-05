import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'

const Contact = () => {
  return (
    <>
      <motion.div id='contact'>
        <p className={`${styles.sectionSubText} `}>Get In touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <div className='flex max-sm:flex-col max-sm:gap-1 gap-10'>
        <Tilt className='mt-5 max-sm:w-full w-sm h-sm p-5 flex items-center border-2 border-emerald-700 bg-emerald-700 rounded-lg hover:bg-transparent'>
          <a className='w-full' href="mailto:abimanyus2504@gmail.com">
            <h2>EMAIL</h2>
            <span className="text-sm">abimanyus2504@gmail.com</span>
          </a>
        </Tilt>

        <Tilt className='mt-5 max-sm:w-full w-sm h-sm p-5 flex items-center border-2 border-orange-600 bg-orange-600 rounded-lg hover:bg-transparent'>
          <a className='w-full' href="https://github.com/abimanyu2515">
            <h2>GITHUB</h2>
            <span className="text-sm">https://github.com/abimanyu2515</span>
          </a>
        </Tilt>
      </div>

      <div className='flex max-sm:flex-col max-sm:gap-1 gap-10'>
        <Tilt className='mt-5 max-sm:w-full w-sm h-sm p-5 flex items-center border-2 border-blue-700 bg-blue-700 rounded-lg hover:bg-transparent'>
          <a className='w-full' href="www.linkedin.com/in/abimanyu-sd/">
            <h2>LinkedIn</h2>
            <span className="text-sm">www.linkedin.com/in/abimanyu-sd/</span>
          </a>
        </Tilt>

        <Tilt className='mt-5 max-sm:w-full w-sm h-sm p-5 flex items-center border-2 border-red-700 bg-red-700 rounded-lg hover:bg-transparent'>
          <a className='w-full' href="https://www.instagram.com/abimanyu_2504/">
            <h2>INSTAGRAM</h2>
            <span className="text-sm">instagram.com/abimanyu_2504/</span>
          </a>
        </Tilt>
      </div>
    </>
  )
}

export default SectionWrapper(Contact)