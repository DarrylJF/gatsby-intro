import React from "react"
import heroStyles from './hero.module.scss'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'

const Hero = (props) => {

  return(
    <div>
      <div className={heroStyles.hero}>
        <div className={heroStyles.heroContainer}>
          <div className={heroStyles.heroContent}>
            <h1></h1>
            <Row className={heroStyles.row}>
              <Col md={props.md} sm={props.sm}>
                <h1>
                  <span className={heroStyles.marks}>//</span>
                  {props.title}
                </h1>
                <p>
                  {props.data}
                </p>
              </Col>
              <Col sm={props.sm2} md={props.md2}>
                <Img fluid={props.image}/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero