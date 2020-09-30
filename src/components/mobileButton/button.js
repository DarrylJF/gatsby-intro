import React from "react"
import Button from 'react-bootstrap/Button'
import buttonStyles from './button.module.scss'

const MobileButton = (props) => {
  return (
    <Button variant="dark" size={props.size} className={buttonStyles.button}>
      {props.title}
    </Button>
  )
}

export default MobileButton