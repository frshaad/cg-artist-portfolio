import { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext({})

export const useDarkMode = () => useContext(DarkModeContext)

export const DarkModeProvider = ({ children }) => {
  // * Default theme: true: Dark, false: Light
  const [isOn, setIsOn] = useState(true)

  return (
    <DarkModeContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </DarkModeContext.Provider>
  )
}
