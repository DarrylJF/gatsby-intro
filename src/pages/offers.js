import React from "react"
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import { graphql, useStaticQuery } from "gatsby"

const Offers = () => {
  const data = useStaticQuery(
    graphql`
      query {
        offers: file(relativePath: {eq: "offers.png"}) {
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
        image={data.offers.childImageSharp.fluid}
        title={"OFFERS"}
        data={"Scan the QR code or follow through the link, print out the offer page and bring it to your next purchase as A to B Tyres."}
        md={4}
        sm={6}
        md2={6}
        sm2={6}
      />
    </Layout>
  )
}

export default Offers