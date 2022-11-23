import { Tb3DCubeSphere } from 'react-icons/tb'

export const ShowcaseInfo = () => {
  return (
    <div className='relative flex flex-col gap-10 pt-32'>
      <p className='select-none text-center text-xl font-light text-gray-700 dark:text-gray-300'>
        Hi there! I am Mahdi Bahmani
      </p>
      <div className='z-10 flex flex-col items-center justify-center gap-3'>
        <p className='relative -left-24 flex select-none items-center font-display text-8xl font-thin capitalize text-gray-900  dark:text-gray-100'>
          extrude{' '}
          <Tb3DCubeSphere className='h-24 w-24 stroke-gray-900 stroke-1 transition duration-500 hover:rotate-180 dark:stroke-gray-100' />
        </p>
        <p className='relative left-20 select-none font-display text-8xl font-semibold capitalize text-gray-900 dark:text-gray-100'>
          architecture
        </p>
        <p className='relative -left-32 select-none font-display text-8xl font-semibold capitalize text-gray-900 dark:text-gray-100'>
          concepts
        </p>
      </div>
    </div>
  )
}
