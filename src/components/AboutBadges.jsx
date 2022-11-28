export const AboutBadges = ({ title, desc, icon, bgColor, acColor }) => {
  return (
    <li
      className='relative flex h-44 w-36 flex-col rounded-lg border-cyan-700 bg-white drop-shadow-lg hover:scale-[1.03] hover:border-t-[6px] hover:drop-shadow-xl dark:border-b-cyan-500 dark:bg-gray-600 md:w-40'
      // style={{ borderColor: bgColor }}
    >
      <p
        className='flex flex-1 items-center rounded-t-lg pl-5 text-left text-lg font-medium capitalize text-gray-700 dark:text-gray-200'
        // style={{ backgroundColor: bgColor }}
      >
        {title}
      </p>

      <p
        className='flex flex-1 items-center justify-center rounded-b-md bg-cyan-500 font-medium capitalize text-gray-100 saturate-50'
        // style={{ backgroundColor: bgColor }}
      >
        {desc}
      </p>

      <div
        className='absolute top-[5.4rem] right-4 -translate-y-1/2 rounded-full bg-cyan-700 p-3  text-white shadow-md saturate-50 dark:bg-gray-800 dark:shadow-lg'
        // style={{ backgroundColor: acColor }}
      >
        {icon}
      </div>
    </li>
  )
}
