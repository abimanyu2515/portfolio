import { SectionWrapper } from '../hoc/index'
import { technologies } from '../constants/content'
import Ball from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center mt-20'>
      {technologies.map((tech) => (
        <div className='w-28 h-28' key={tech.name}>
          <Ball icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech)