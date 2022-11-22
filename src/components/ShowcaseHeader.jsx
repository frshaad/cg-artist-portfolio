import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'
import { useDarkMode } from '../contexts/DarkMode'
import '../index.css'

export const ShowcaseHeader = () => {
  const { isOn, setIsOn } = useDarkMode()

  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isOn])

  const toggleSwitch = () => setIsOn(!isOn)

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  return (
    <div className='flex items-center justify-between font-sans'>
      <p className='cursor-pointer text-lg text-gray-800 dark:text-gray-50'>
        <span className='font-bold'>Mahdi</span>
        <span className='font-extralight'>Bahmani</span>
      </p>

      <div className='flex items-center justify-center gap-6'>
        <a
          href='#contact'
          // className=' rounded-full border-2 border-gray-800 py-2 px-5 font-semibold transition hover:bg-gray-800 hover:text-gray-50 dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-50  dark:hover:text-gray-800 '
          className='py-2 px-5 font-semibold uppercase transition hover:bg-gray-800 hover:text-gray-50 dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-50  dark:hover:text-gray-800 '
        >
          Contact
        </a>

        <div className='switch ' data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className='handle' layout transition={spring}>
            {isOn ? (
              <div className='hidden h-full w-full items-center justify-center text-gray-50  dark:flex '>
                <MdOutlineLightMode />
              </div>
            ) : (
              <div className='flex h-full w-full -rotate-45 items-center justify-center text-gray-900  dark:hidden'>
                <MdOutlineNightlight />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
