import { ShowcaseHeader } from './ShowcaseHeader'
import { ShowcaseInfo } from './ShowcaseInfo'
import { ShowcaseServices } from './ShowcaseServices'
import { ShowcaseSocial } from './ShowcaseSocial'

export const ShowcaseContent = () => {
  return (
    <div className='relative flex w-2/3 flex-col px-12 py-8'>
      <ShowcaseHeader />
      <ShowcaseInfo />
      <ShowcaseServices />
      <ShowcaseSocial />
    </div>
  )
}
