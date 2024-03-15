import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

export default function Portal({mode,setmode}) {
  return (
    <div className='portal'>
        <Topbar mode={mode} setmode={setmode} />
        <Outlet />
    </div>
  )
}
