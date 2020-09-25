import React from "react"
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import { useStaticQuery, graphql } from "gatsby"


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
    </Layout>
  )
}

export default About