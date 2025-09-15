import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
    const location = useLocation()
    const showFooter = ['/', '/contact', '/news-and-events'].includes(location.pathname)
    const hideNavBar = ['/login', '/dashboard/admin', '/dashboard/students', '/dashboard/teachers', '/dashboard/parents'].includes(location.pathname)
  return (
    <div>
        {!hideNavBar && <NavBar />}
        {showFooter && <footer>Footer Content</footer>}
        <Outlet />
    </div>
  )
}

export default Layout