import React from "react"
import footerStyles from './footer.module.scss'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
    query {
      logo: file(relativePath: {eq: "logo.png"}) {
      id
        childImageSharp {
          fixed(height: 60, width: 60) {
            ...GatsbyImageSharpFixed
        }
      }
    }
   }
  `
  )
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.contain}>
        <div className={footerStyles.footerCompanyDetails}>
          <Row>
            <Col md={4}>
              <Img fixed={data.logo.childImageSharp.fixed} alt="Company Logo"/>
            </Col>
            <Col md={4} className={footerStyles.colTextCenter}>
              <p>Elton Park Business Centre</p>
              <p>Russell House Hadleigh Road</p>
              <p>Ipswich, Suffolk IP2 0DD</p>
            </Col>
            <Col md={4} className={[footerStyles.colTextRight, footerStyles.colTextCenter]}>
              <p>
                <a href="#">Cookie Policy</a>
              </p>
              <p>Company Number 10873204 - 2017-2020</p>
              <p>© Copyright, A To B Tyres Ltd.</p>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  )
}

export default Footer