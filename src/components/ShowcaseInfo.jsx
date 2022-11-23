import { Tb3DCubeSphere } from 'react-icons/tb'

export const ShowcaseInfo = () => {
  return (
    <div className='relative flex flex-col gap-10 md:px-12 md:py-8'>
      <p className='select-none text-center text-xl font-light text-gray-700 dark:text-gray-300'>
        Hi there! I am Mahdi Bahmani
      </p>
      <div className='z-10 flex flex-col items-center justify-center gap-3 p-3 md:p-0'>
        <p className='relative flex select-none items-center font-display text-7xl font-thin capitalize text-gray-900 dark:text-gray-100 md:-left-24  md:text-8xl'>
          extrude{' '}
          <Tb3DCubeSphere className='h-24 w-24 animate-pulse stroke-gray-900 stroke-1 transition duration-500 hover:rotate-180 dark:stroke-gray-100 md:animate-none' />
        </p>
        <p className='relative select-none font-display text-7xl font-semibold capitalize text-gray-900 dark:text-gray-100 md:text-8xl lg:left-20'>
          architecture
        </p>
        <p className='relative select-none font-display text-7xl font-semibold capitalize text-gray-900 dark:text-gray-100 md:-left-32 md:text-8xl'>
          concepts
        </p>
      </div>
    </div>
  )
}
