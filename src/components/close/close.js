import React from "react"
import { FaTimes} from "react-icons/all"

import closeStyles from './close.module.scss'

const Close = props => {
  return (
    <button className={closeStyles.Close}>
      <FaTimes onClick={props.clicked}/>
    </button>
  )
}

export default Close