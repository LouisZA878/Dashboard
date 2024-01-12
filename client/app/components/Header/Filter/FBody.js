'use client'

import { useState } from 'react'

import FHeader from "./FHeader"
import FItems from "./FItems"

const FBody = ({ openModal, setOpenModal, grype, setName }) => {
    const [filter, setFilter] = useState('')

    if(!openModal){
        return null
    }
  return (
    <>
        <div className='B-R15 FBody'>
            <FHeader setOpenModal={setOpenModal} setFilter={setFilter}/>
            <FItems grype={grype}
                setName={setName}
                Filter={filter}
            />
        </div>
      
    </>

  )
}



export default FBody