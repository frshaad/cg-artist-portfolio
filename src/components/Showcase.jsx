import { ShowcaseContent } from './ShowcaseContent'
import { ShowcaseSlider } from './ShowcaseSlider'

export const Showcase = () => {
  return (
    <div className='flex h-screen bg-slate-50 dark:bg-gray-900'>
      <ShowcaseSlider />
      <ShowcaseContent />
    </div>
  )
}
