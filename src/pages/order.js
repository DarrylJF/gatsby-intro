import React from "react"
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import { graphql, useStaticQuery } from "gatsby"

const Order = () => {
  const data = useStaticQuery(
    graphql`
      query {
        shop: file(relativePath: {eq: "shop.png"}) {
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
        image={data.shop.childImageSharp.fluid}
        title={"ORDER"}
        data={"Use our online shop to find the right tyres for you. Get them fitted at your convenience."}
        md={4}
        sm={8}
        md2={4}
        sm2={4}
      />
    </Layout>
  )
}

export default Order