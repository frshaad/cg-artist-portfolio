import { Tb3DCubeSphere } from 'react-icons/tb'

export const ShowcaseInfo = () => {
  return (
    <div className='relative mx-auto flex w-full flex-col gap-10 md:px-12 md:py-8'>
      <p className='mb-5 select-none text-center text-lg font-light text-gray-700 dark:text-gray-300 md:text-xl'>
        Hi there! <span className='font-medium'>I am Mahdi Bahmani</span>
      </p>
      <div className='flex flex-col items-center justify-center p-3 md:gap-3 md:p-0'>
        <p className='relative mb-3 flex select-none items-center font-display text-5xl font-thin capitalize text-gray-900 dark:text-gray-100 md:-left-24 md:mb-0 md:text-8xl'>
          extrude{' '}
          <Tb3DCubeSphere className='h-16 w-16 animate-pulse stroke-gray-900 stroke-1 transition duration-500 hover:rotate-180 dark:stroke-gray-100 md:h-24 md:w-24 md:animate-none' />
        </p>
        <p className='relative mb-3 select-none font-display text-5xl font-semibold capitalize text-gray-900 dark:text-gray-100 md:left-10 md:mb-0 md:text-8xl'>
          architecture
        </p>
        <p className='relative mb-3 select-none font-display text-5xl font-semibold capitalize text-gray-900 dark:text-gray-100 md:-left-24 md:mb-0 md:text-8xl'>
          concepts
        </p>
      </div>
    </div>
  )
}
