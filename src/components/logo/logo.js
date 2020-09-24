import React from "react"
import atobLogo from '../../assets/images/logo.png'

const Logo = (props) => {

  return (
      <img src={atobLogo} alt={props.alt} style={{height: props.height}}/>
  )
}

export default Logo