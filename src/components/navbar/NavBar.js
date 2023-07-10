import './NavBar.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='App-header'>
      <NavLink to = "/xplore" className='NavItem'>
        Xplore - Eth Block Explorer
      </NavLink>
      <NavLink to = "/specific" className='NavItem'>
        Accounts

      </NavLink>
    </div>
  )
}

export default NavBar