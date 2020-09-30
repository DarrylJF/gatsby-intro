import React from "react"
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import { useStaticQuery, graphql } from "gatsby"

import aboutStyles from './about.module.scss'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        about: file(relativePath: {eq: "about-us.png"}) {
          id
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid  
            }
          }
        }
      }
 `
  )
  return (
    <Layout>
      <Hero
        image={data.about.childImageSharp.fluid}
        title={"ABOUT US"}
        data={"We are dedicated team working to help our clients with tyre fittings, repairs and more, striving for excellent customer service."}
        md={4}
        sm={8}
        md2={3}
        sm2={4}
      />
      <div className={aboutStyles.bg}>
        <Container>
          <Row className={aboutStyles.row}>
            <Col className={aboutStyles.colCenter} md={8}>
              <p>
                A to B Tyres Ltd is a family run tyre business in Ipswich near you. We offer a friendly and professional service supplying and fitting tyres either at our
                garage or the mobile tyre fitting van, to enable you to keep your vehicle running smoothly, efficiently, economically and legally. We carry an extensive range
                of tyres which range from top premium tyres, mid-range and budget tyres.
              </p>
              <p>
                We can offer same day* fitting at your home, work or roadside assistance to get you back on the road. For same day or emergency fitting please CALL US.
                <br/>
                <br/>
                <i>*if ordered before 11am</i>
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{marginTop: '3rem', paddingTop: '3rem'}}>
            <Col md={12}>
              <h2 style={{marginBottom: '3rem'}}>
                <span className={aboutStyles.marks}>//</span>
                Our Services
              </h2>
            </Col>
            <Col md={4}>
              <Card className={aboutStyles.card}>
                <Card.Header/>
                <Card.Body>
                  <h3>
                    <span className={aboutStyles.marks}>//</span>
                    Tyre Fitting
                  </h3>
                  <p style={{paddingTop: '0.5rem'}}>
                    Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars,
                    vans, trailers and 4X4s.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={aboutStyles.card}>
                <Card.Header/>
                <Card.Body>
                  <h3>
                    <span className={aboutStyles.marks}>//</span>
                    Tyre Fitting
                  </h3>
                  <p style={{paddingTop: '0.5rem'}}>
                    Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars,
                    vans, trailers and 4X4s.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={aboutStyles.card}>
                <Card.Header/>
                <Card.Body>
                  <h3>
                    <span className={aboutStyles.marks}>//</span>
                    Tyre Fitting
                  </h3>
                  <p style={{paddingTop: '0.5rem'}}>
                    Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars,
                    vans, trailers and 4X4s.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={aboutStyles.card}>
                <Card.Header/>
                <Card.Body>
                  <h3>
                    <span className={aboutStyles.marks}>//</span>
                    Tyre Fitting
                  </h3>
                  <p style={{paddingTop: '0.5rem'}}>
                    Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars,
                    vans, trailers and 4X4s.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={aboutStyles.card}>
                <Card.Header/>
                <Card.Body>
                  <h3>
                    <span className={aboutStyles.marks}>//</span>
                    Tyre Fitting
                  </h3>
                  <p style={{paddingTop: '0.5rem'}}>
                    Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars,
                    vans, trailers and 4X4s.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={aboutStyles.card}>
                <Card.Header/>
                <Card.Body>
                  <h3>
                    <span className={aboutStyles.marks}>//</span>
                    Tyre Fitting
                  </h3>
                  <p style={{paddingTop: '0.5rem'}}>
                    Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars,
                    vans, trailers and 4X4s.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default About