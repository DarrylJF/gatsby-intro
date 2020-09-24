import React from "react"
import BackgroundGrey from "../backgroundGrey/backgroundGrey"
import Footer from "../footer/footer"

import backgroundStyles from './background.module.scss'

const Background = () => {
  return (
      <div className={backgroundStyles.background}>
        <BackgroundGrey />
        <Footer />
      </div>
  )
}

export default Background