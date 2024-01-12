import React from 'react'

const FHeader = ({ setOpenModal, setFilter }) => {
  return (
    <div className='FHeader'>
        <input type='text' className='FIn' placeholder='Search for a container' onChange={(e) => setFilter(e.target.value)}/>
        <div className='FEx' onClick={setOpenModal}> Exit </div>

    </div>
  )
}

export default FHeader