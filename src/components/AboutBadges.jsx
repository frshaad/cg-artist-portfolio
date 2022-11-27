export const AboutBadges = ({ title, desc, icon, bgColor, acColor }) => {
  return (
    <li
      className='relative flex h-44 w-36 flex-col rounded-lg border-t-4 border-b-cyan-800 border-t-cyan-800 bg-white shadow-lg hover:scale-105 hover:shadow-2xl dark:border-b-cyan-500 dark:bg-gray-600 md:w-40'
      style={{ borderColor: bgColor }}
    >
      <p
        className='flex flex-1 items-center rounded-t-lg pl-5 text-left text-lg font-medium capitalize text-gray-900 dark:text-gray-200'
        // style={{ backgroundColor: bgColor }}
      >
        {title}
      </p>

      <p
        className='flex flex-1 items-center justify-center rounded-b-md font-medium capitalize text-gray-700 saturate-50'
        style={{ backgroundColor: bgColor }}
      >
        {desc}
      </p>

      <div
        className='absolute top-[5.4rem] right-4 -translate-y-1/2 rounded-full p-3 text-white shadow-md saturate-50 dark:bg-gray-800 dark:shadow-lg'
        style={{ backgroundColor: acColor }}
      >
        {icon}
      </div>
    </li>
  )
}
