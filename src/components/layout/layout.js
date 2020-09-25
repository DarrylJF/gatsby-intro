import React, { useState } from 'react'
import './layout.module.scss'
import "../../components/FontAwesomeIcons/index"

import Header from '../navigation/header/header'
import SideDrawer from "../navigation/sideDrawer/sideDrawer"
import Background from "../background/background"




const Layout = (props) => {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer(true);
  }


  return (
    <div>
      <Header open={sideDrawerOpenHandler}/>
      <SideDrawer show={showSideDrawer} close={sideDrawerCloseHandler}/>
      <main>
        {props.children}
      </main>
      <Background/>
    </div>
  )
}

export default Layout;
