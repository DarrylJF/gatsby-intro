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
            <Col>
              <h4>
                <span className={backgroundGreyStyles.marks}>//</span>
                Got Questions?
              </h4>
            </Col>
            <Col md={4} lg={3}>
              <FontAwesomeIcon icon="phone"/>
            </Col>
            <Col md={4} lg={3}>
              <FontAwesomeIcon icon="envelope"/>
            </Col>
            <Col md={4} lg={3}>
              <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default BackgroundGrey