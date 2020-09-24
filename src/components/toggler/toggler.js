import React from "react"
import { GiHamburgerMenu } from "react-icons/all"
import togglerStyles from './toggler.module.scss'

const Toggler = (props) => {
  return (
    <div className={togglerStyles.toggler}>
      <GiHamburgerMenu onClick={props.clicked}/>
    </div>
  )
}

export default Toggler