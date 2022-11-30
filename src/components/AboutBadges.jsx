export const AboutBadges = ({ title, desc, icon }) => {
  return (
    <li className='relative flex h-44 w-36 flex-col rounded-lg border-cyan-800 bg-white drop-shadow-lg hover:scale-[1.03] hover:border-t-[6px] hover:drop-shadow-xl dark:border-t-cyan-600 dark:bg-gray-600 md:w-40'>
      <p className='flex flex-1 items-center rounded-t-lg pl-5 text-left text-lg font-medium capitalize text-gray-700 dark:text-gray-200'>
        {title}
      </p>

      <p className='flex flex-1 items-center justify-center rounded-b-md bg-cyan-600 text-sm font-medium capitalize text-gray-100 saturate-50 md:text-base'>
        {desc}
      </p>

      <div className='absolute top-[5.4rem] right-4 -translate-y-1/2 rounded-full bg-cyan-800 p-3  text-white shadow-lg saturate-50  dark:shadow-lg'>
        {icon}
      </div>
    </li>
  )
}
