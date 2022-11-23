import { About } from '../components/About'
import { Showcase } from '../components/Showcase'

export const Home = () => {
  return (
    <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
      <Showcase />
      <About />
    </div>
  )
}
