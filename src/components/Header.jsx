import React ,{useState, useEffect} from 'react'

import { Toggle } from './Toggle';

import Lottie from 'react-lottie-player'

import cal from '../assets/calculator.json'

const Header = () => {

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    
  // Handling dark mode
  const toggleDarkMode = (mode) => {
    setDarkMode(mode === 'dark');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className='w-full'>
        <header className="fixed top-0 left-0 w-full bg-[#f4f4f5] dark:bg-[#1C1A27] z-10 p-4">
        <div className="flex justify-between items-center w-full">
            <div className=' flex items-center gap-5'>
        <Lottie
      loop
      animationData={cal}
      play
      style={{ width:90, height: 90 }}
    />
          <h1 className="sm:text-3xl text-xl font-bold px-2 sm:block hidden text-gray-900 dark:text-gray-100">EMI Calculator</h1>
          </div>
          <Toggle selected={darkMode ? "dark" : "light"} setSelected={toggleDarkMode} />
        </div>
      </header>
    </div>
  )
}

export default Header
