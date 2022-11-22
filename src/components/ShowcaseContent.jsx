import { ShowcaseHeader } from './ShowcaseHeader'
import { ShowcaseInfo } from './ShowcaseInfo'

export const ShowcaseContent = () => {
  return (
    <div className='w-2/3 px-12 py-8'>
      <ShowcaseHeader />
      <ShowcaseInfo />
    </div>
  )
}
