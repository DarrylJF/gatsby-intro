import React from "react"
import backgroundGreyStyles from './backgroundGrey.module.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const BackgroundGrey = () => {
  let bgClasses = [backgroundGreyStyles.bg, backgroundGreyStyles.bgGrey];

  return (
      <div className={bgClasses.join(' ')}>
        <Container>
          <Row className={backgroundGreyStyles.contactInfo}>
            <Col lg={12}>
              <h4>
                <span className={backgroundGreyStyles.marks}>//</span>
                Got Questions?
              </h4>
            </Col>
            <Col md={4} lg={3} className={backgroundGreyStyles.flexColumn}>
              <FontAwesomeIcon icon="phone" />
              <a href="tel:+441473269030">01473 269030</a>
            </Col>
            <Col md={4} lg={3} className={backgroundGreyStyles.flexColumn}>
              <FontAwesomeIcon icon="envelope"/>
              <a href="mailto:BSMYTHE@HOTMAIL.CO.UK">BSMYTHE@HOTMAIL.CO.UK</a>
            </Col>
            <Col md={4} lg={3} className={backgroundGreyStyles.flexColumn}>
              <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
              <a href="https://facebook.com/atobtyres" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default BackgroundGrey