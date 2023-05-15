import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const HelpLayout = () => {
  return (
    <div className='help-layout'>
        <h1>Help</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, nulla.</p>
        <nav>
            <NavLink to='faq'>Faq</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
