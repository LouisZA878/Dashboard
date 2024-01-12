'use client'

import { useState } from 'react'


import BHeader from './Sidebar/BHeader';
import List from './Sidebar/List';

const Sidebar = ({setOpen}) => {
 const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        setOpen(!isOpen)
    }

    const setDarkMode = () => {
      document.querySelector('body').setAttribute('data-theme', 'dark')
     }
     const setLigtMode = () => {
      document.querySelector('body').setAttribute('data-theme', 'light')
     }
     const toggleTheme = (e) => {
      if(e.target.checked) setDarkMode()
      else setLigtMode()
     }


  return (
    <div className='Sidebar'
        style={{ width : isOpen ? '125px' : '75px'}}>
        <BHeader toggle={toggle} isOpen={isOpen}/>
        <List isOpen={isOpen}/>
        <div className='dark-light'>
        <input 
          type='checkbox'
          onChange={toggleTheme}
          id="toggle"
        />
        <label for="toggle"></label>
        </div>
    </div>
  )
}

export default Sidebar