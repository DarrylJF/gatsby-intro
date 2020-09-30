import React from "react"
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from '../components/mobileButton/button'

const Mobile = () => {
  const data = useStaticQuery(
    graphql`
      query {
        van: file(relativePath: {eq: "van.png"}) {
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
        image={data.van.childImageSharp.fluid}
        title={"MOBILE"}
        data={"Full Mobile Tyre Fitting Service. Same day* mobile tyre services at your home, work or roadside assistance to get you back on the road. For same day or emergency fitting please CALL US.."}
        md={4}
        sm={7}
        md2={6}
        sm2={5}>
        <Button
          title="Call Us"
          size="lg"/>
        <Link to="/order/">
          <Button
            title="Order Online"
            size="lg"/>
        </Link>
      </Hero>
    </Layout>
  )
}

export default Mobile