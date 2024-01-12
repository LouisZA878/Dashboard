import React from 'react'

import Name from './Header/Name'
import Profile from './Header/Profile'
import Filter from './Header/Filter'



const Header = ({ openModal, setOpenModal, conName, grype }) => {

  return (
    <div className='Header'>

        <Name />
        <Profile />
        <Filter openModal={openModal} setOpenModal={setOpenModal} conName={conName} grype={grype}/>
    </div>
  )
}

export default Header