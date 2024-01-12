'use client'

import { useState } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import FBody from './components/Header/Filter/FBody'


export default function Main({ grype }) {
    const [openModal, setOpenModal] = useState(false)
    const toggle = () => setOpenModal(!openModal)
    const [open, setOpen] = useState(false)

    const [containerName, setContainerName] = useState('')
    console.log(grype)

  return (
    <>
      <Header openModal={openModal} setOpenModal={toggle} conName={containerName} grype={grype}/>
      <Body 
        conName={containerName}
        grype={grype}
        open={open}
      />
      <Sidebar
        setOpen={(e) => setOpen(e)}
      />
      <FBody
        openModal={openModal}
        setOpenModal={toggle}
        grype={grype}
        setName={setContainerName}

        />
    </>
  )
}
