import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Projects } from '../components/Projects'
import { Showcase } from '../components/Showcase'

export const Home = () => {
  return (
    <div className='snap-y snap-mandatory overflow-y-scroll'>
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
