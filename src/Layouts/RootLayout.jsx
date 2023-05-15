import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className='root-layout'>
        <header>
        <h1>Job Seeker</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">about</NavLink>
                <NavLink to="Help">Help</NavLink>
                <NavLink to="Career">Career</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
