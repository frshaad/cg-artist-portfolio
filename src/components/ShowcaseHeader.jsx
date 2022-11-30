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
    <div className='font-sans mb-4 flex items-center justify-between'>
      <p className='cursor-pointer text-base text-gray-800 dark:text-gray-50 md:text-lg'>
        <span className='font-bold'>Mahdi</span>
        <span className='font-extralight'>Bahmani</span>
      </p>

      <div className='flex items-center justify-center'>
        <a
          href='#contact'
          className='py-2 px-5 text-base font-semibold uppercase transition dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-800 md:mr-4  md:text-lg md:hover:bg-gray-800  md:hover:text-gray-50 '
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
