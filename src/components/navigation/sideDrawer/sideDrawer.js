import React from "react"
import sideDrawerStyles from './sideDrawer.module.scss'

import NavItems from '../navItems/nav-items'
import Close from '../../close/close'

const SideDrawer = (props) => {

  let attachedClasses = [sideDrawerStyles.SideDrawer, sideDrawerStyles.Close];
  if (props.show) {
    attachedClasses = [sideDrawerStyles.SideDrawer, sideDrawerStyles.Open]
  }

  return (
    <div className={attachedClasses.join(' ')}>
      <nav>
        <NavItems/>
        <Close clicked={props.close}/>
      </nav>
    </div>
  )
}

export default SideDrawer