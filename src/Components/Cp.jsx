import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'

const Cp = () => {
    return (
        <div className=''>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText}`}>Competitive Programming.</h2>
          </motion.div>

          <a href="https://leetcode.com/u/Abimanyu_S/">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 p-2  border  text-red-400 text-[17px] leading-[30px] hover:bg-red-700 hover:text-white"
          >
            LEETCODE <br /> Secured contest rating of 1472 at the top 53.67% globally and solved 415 problems using Python.
          </motion.p>
          </a>

          <a href="https://www.codechef.com/users/abi_2504">  
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 p-2 border  text-blue-500 text-[17px] leading-[30px] hover:bg-blue-800 hover:text-white"
          >
            CODECHEF <br /> Secured contest rating of 1026 along with active participation and have solved over 200 problems.
          </motion.p>
          </a>
        </div>
    )
}

export default SectionWrapper(Cp);