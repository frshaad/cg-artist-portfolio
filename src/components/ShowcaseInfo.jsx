export const ShowcaseInfo = () => {
  return (
    <div className='relative grid h-full w-full place-content-center'>
      <p className='text-center text-lg font-extralight  text-gray-700 dark:text-gray-400'>
        Hi there! I am Mahdi Bahmani
      </p>
      <div className='z-10 grid place-content-center'>
        <p className='-translate-x-20 text-7xl font-thin capitalize text-gray-900 dark:text-gray-100'>
          extrud your
        </p>
        <p className='translate-x-9 text-7xl font-semibold capitalize text-gray-900 dark:text-gray-100'>
          architecture
        </p>
        <p className='-translate-x-9 text-7xl font-semibold capitalize text-gray-900 dark:text-gray-100'>
          ideas
        </p>
      </div>
      <div className='absolute -left-12 bottom-2 z-0 h-1/3 w-2/3 bg-gray-700'></div>
    </div>
  )
}
