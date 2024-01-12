import React from 'react'

import { MdOutlineSpaceDashboard,
    MdBugReport,
    MdOutlineRoundaboutRight
  } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";

const List = ({ isOpen }) => {
    const list = [
        {
            name: 'Dashboard',
            icon: <MdOutlineSpaceDashboard />
        },
        {
            name: 'Software',
            icon: <GrCloudSoftware />
        },
        {
            name: 'Reports',
            icon: <MdBugReport />
        },
        {
            name: 'About',
            icon: <MdOutlineRoundaboutRight />
        },
        {
            name: 'Tasks',
            icon: <FaTasks />
        },
    ]




  return (
    <div className='List'>
        {
            list.map((item, i) => {
                return (
                    <span key={i} className='ListItem'>
                        <span className={`Icon OpenIc`}>{item.icon}</span>
                        <span className={`Name`} style={{display: isOpen ? 'block' : 'none'}}>{item.name}</span>
                    </span>
                )
            })
        }

    </div>
  )
}

export default List