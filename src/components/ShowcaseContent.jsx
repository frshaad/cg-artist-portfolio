import { ShowcaseHeader } from './ShowcaseHeader'
import { ShowcaseInfo } from './ShowcaseInfo'
import { ShowcaseServices } from './ShowcaseServices'
import { ShowcaseSocial } from './ShowcaseSocial'

export const ShowcaseContent = () => {
  return (
    <div className='relative flex h-screen w-full  flex-col justify-between xl:w-2/3'>
      <ShowcaseHeader />
      <ShowcaseInfo />
      <div className='flex flex-col-reverse items-end justify-between md:flex-row'>
        <ShowcaseServices />
        <ShowcaseSocial />
      </div>
    </div>
  )
}
