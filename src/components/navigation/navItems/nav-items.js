import React from "react"

import NavItem from '../navItems/navItem/nav-item'

const NavItems = () => {

  return (
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/about/">About</NavItem>
      <NavItem link="/offers/">Offers</NavItem>
      <NavItem link="/mobile/">Mobile Fitting</NavItem>
      <NavItem link="/order/">Order Mobile Tyres</NavItem>
      <NavItem link="/contact/">Contact Us</NavItem>
    </ul>
  )
}

export default NavItems