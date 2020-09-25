import React from "react"
import Layout from '../components/layout/layout'
import Hero from "../components/hero/hero"
import { graphql, useStaticQuery } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        about: file(relativePath: {eq: "about-us.png"}) {
          id
            childImageSharp {
              fluid(maxWidth: 1000) {
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
        title={"CONTACT US"}
        data={"We're friendly people wanting to help get you back on the road. Get in touch today to get your car booked in. We usually can do same day and next day fittings."}
        md={4}
        sm={8}
        md2={3}
        sm2={4}
      />
    </Layout>
  )
}

export default Contact