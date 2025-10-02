import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'

const Cp = () => {
    return (
        <>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText}`}>Competitive Programming.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 p-2  border  text-red-400 text-[17px] leading-[30px]"
          >
            LEETCODE <br /> Secured contest rating of 1450 at the top 62.98% globally and solved 340 problems using Python.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 p-2 border  text-blue-500 text-[17px] leading-[30px]"
          >
            CODECHEF <br /> Secured contest rating of 957 along with active participation and have solved over 200 problems.
          </motion.p>
        </>
    )
}

export default SectionWrapper(Cp);