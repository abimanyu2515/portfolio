import { motion } from 'framer-motion'
import { styles } from "../styles"
import { experiences } from "../constants/content"
import SectionWrapper from "../hoc/SectionWrapper"
import { textVariant } from "../utils/motion"
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid whitesmoke' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} className='w-[100%] h-[100%] p-0.5 rounded-full object-contain' alt="" />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-blue-100 text-[16px] font-semibold'>{experience.company_name}</p>
        <ol className='mt-5 ml-4 space-y-2' style={{ listStyleType: 'lower-roman' }}>
          {experience.points.map((content) => (
            <li className='text-[14px]'>
              {content}
            </li>
          ))}
        </ol>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div id='work'>
        <p className={`${styles.sectionSubText}`}>What I Have Done So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Professional Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience)