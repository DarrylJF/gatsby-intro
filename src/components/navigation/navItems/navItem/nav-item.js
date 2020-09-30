import React from "react"
import { Link } from 'gatsby'
import navItemStyles from './nav-item.module.scss'

const NavItem = (props) => {

  return (
    <li className={navItemStyles.navItem}>
      <Link to={props.link} className={navItemStyles.menuItem} activeClassName={navItemStyles.activeMenuItem}>
        {props.children}
      </Link>
    </li>
  )
}

export default NavItem
