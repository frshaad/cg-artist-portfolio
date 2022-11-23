import { useEffect, useState } from 'react'
import { ShowcaseContent } from './ShowcaseContent'
import { ShowcaseSlider } from './ShowcaseSlider'

export const Showcase = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  if (isLoading) {
    return <h1>loading</h1>
  }

  return (
    <div className='flex snap-start flex-col-reverse  bg-slate-50 transition duration-300 dark:bg-black xl:max-h-screen xl:flex-row '>
      <ShowcaseSlider />
      <ShowcaseContent />
    </div>
  )
}
